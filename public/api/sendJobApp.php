<?php
/*****************************************************************
 * Hardened Job Application Handler with Detailed Error Codes
 * PHP 8+ + PHPMailer
 *****************************************************************/

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

/* ------------ CONFIG ------------ */
$redirectBase = '/career/';
$to           = 'admin@indivirtus.com';
$fromEmail    = 'admin@indivirtuscro.com';
$fromName     = 'IESPL Job Application Form';
$smtpPass     = 'Indivirtus@123';
$tmpUploadDir = __DIR__ . '/tmp_uploads';
$rateDir      = __DIR__ . '/rate_limit';
$maxRequests  = 10;
$windowSecs   = 3600;
$maxFileSize  = 5 * 1024 * 1024; // 5MB
$allowedExt   = ['pdf', 'doc', 'docx'];
$allowedMime  = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

/* ------------ HELPERS ------------ */
function redirect(string $base, string $qs): never {
    header("Location: {$base}?{$qs}");
    exit;
}

function clean(string $v): string {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
}

function log_error(string $msg) {
    file_put_contents(__DIR__ . '/mail_error.log', "[".date('Y-m-d H:i:s')."] $msg\n", FILE_APPEND);
}

function isRateLimited(string $ip, string $dir, int $limit, int $window): bool {
    if (!is_dir($dir) && !mkdir($dir, 0700, true)) {
        return true;
    }
    $file = $dir . '/' . md5($ip) . '.json';
    $now = time();
    $history = [];

    if (is_file($file)) {
        $history = json_decode((string)file_get_contents($file), true) ?: [];
        $history = array_filter($history, fn($ts) => ($now - $ts) < $window);
    }

    if (count($history) >= $limit) {
        return true;
    }

    $history[] = $now;
    file_put_contents($file, json_encode($history), LOCK_EX);
    return false;
}

/* ------------ MAIN ------------ */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect($redirectBase, 'error=invalid_request');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (isRateLimited($ip, $rateDir, $maxRequests, $windowSecs)) {
    redirect($redirectBase, 'error=too_many_attempts');
}

/* Collect & validate input */
$name       = clean($_POST['name'] ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$contact    = clean($_POST['contact'] ?? '');
$message    = clean($_POST['message'] ?? '');
$jobTitle   = clean($_POST['jobTitle'] ?? '');
$jobDept    = clean($_POST['jobDepartment'] ?? '');
$tmpFilePath = '';
$originalName = '';

if (!empty($_POST['website'])) { // Honeypot
    redirect($redirectBase, 'error=spam_detected');
}

if ($name === '' || $email === '' || $contact === '') {
    redirect($redirectBase, 'error=empty');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect($redirectBase, 'error=invalid_email');
}

// Prevent header injection attempts
$injectionPattern = '/(content-type:|bcc:|cc:|to:|href=)/i';
foreach ([$name, $email, $contact, $message, $jobTitle, $jobDept] as $field) {
    if (preg_match($injectionPattern, $field)) {
        redirect($redirectBase, 'error=invalid_input');
    }
}

/* ------------ HANDLE FILE UPLOAD ------------ */
if (!is_dir($tmpUploadDir)) {
    mkdir($tmpUploadDir, 0700, true);
}

if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    redirect($redirectBase, 'error=no_resume');
}

$fileTmp = $_FILES['resume']['tmp_name'];
$originalName = preg_replace("/[^a-zA-Z0-9_\.-]/", "_", $_FILES['resume']['name']);
$fileSize = $_FILES['resume']['size'];
$fileExt = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
$fileMime = mime_content_type($fileTmp);

if (!in_array($fileExt, $allowedExt, true)) {
    redirect($redirectBase, 'error=invalid_filetype');
}

if (!in_array($fileMime, $allowedMime, true)) {
    redirect($redirectBase, 'error=invalid_mimetype');
}

if ($fileSize > $maxFileSize) {
    redirect($redirectBase, 'error=file_too_large');
}

// Inspect first bytes to avoid executables
$fileHeader = @file_get_contents($fileTmp, false, null, 0, 4);
if ($fileHeader !== false && preg_match('/(<\?php|MZ)/i', $fileHeader)) {
    redirect($redirectBase, 'error=invalid_file_content');
}

$tmpFilePath = $tmpUploadDir . '/' . uniqid('resume_', true) . '.' . $fileExt;

if (!move_uploaded_file($fileTmp, $tmpFilePath)) {
    redirect($redirectBase, 'error=file_upload_failed');
}

/* ------------ BUILD EMAIL ------------ */
$subject = 'New Job Application - ' . $jobTitle;
$emailBody = "
  <h2>New Job Application</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Contact:</strong> {$contact}</p>
  <p><strong>Position:</strong> {$jobTitle}" . ($jobDept ? " ({$jobDept})" : '') . "</p>
  <p><strong>Message:</strong><br>{$message}</p>
";

/* ------------ SEND EMAIL ------------ */
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $fromEmail;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $emailBody;

    if (!empty($tmpFilePath) && file_exists($tmpFilePath)) {
        $mail->addAttachment($tmpFilePath, $originalName);
    }

    $mail->send();

    if (!empty($tmpFilePath) && file_exists($tmpFilePath)) {
        unlink($tmpFilePath);
    }

    redirect($redirectBase, 'success=true');

} catch (Exception $e) {
    log_error("MAIL ERROR: " . $mail->ErrorInfo);
    if (!empty($tmpFilePath) && file_exists($tmpFilePath)) {
        unlink($tmpFilePath);
    }
    redirect($redirectBase, 'error=send_failed');
}
