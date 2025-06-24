<?php
/*****************************************************************
 * Secure Contact Form Handler with Rate-Limiting + PHPMailer (PHP 8+)
 *****************************************************************/

declare(strict_types=1);

/* ---------- CONFIGURE --------------------------------------- */
$env = parse_ini_file('.env');
// $redirectBase = 'https://indivirtus.com/contact-us';
$redirectBase = 'https://steelblue-nightingale-280613.hostingersite.com/contact-us/';
$to           = 'admin@indivirtus.com';
$fromEmail    = 'admin@indivirtuscro.com';   // Update with your Hostinger email
$fromName     = 'IESPL Website Contact Page Form';
$smtpPass     = 'Indivirtus@123';             // Your email password or app password
$rateDir      = __DIR__ . '/rate_limit';    // must be writable
$maxRequests  = 10;                           // submissions per window
$windowSecs   = 3600;                        // 1 hour
/* ------------------------------------------------------------- */

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

// Helpers
function redirect(string $base, string $qs): never {
    header("Location: {$base}?{$qs}");
    exit;
}

function clean(string $v): string {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
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

// MAIN
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect($redirectBase, 'error=invalid_request');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (isRateLimited($ip, $rateDir, $maxRequests, $windowSecs)) {
    redirect($redirectBase, 'error=too_many_attempts');
}

// Collect & validate input
$name    = clean($_POST['name'] ?? '');
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$contact  = clean($_POST['contact'] ?? '');
$message  = clean($_POST['message'] ?? '');

// Honeypot anti-spam
if (!empty($_POST['website'] ?? '')) {
    redirect($redirectBase, 'error=spam_detected');
}

if ($name === '' || $email === '' || $message === '') {
    redirect($redirectBase, 'error=empty');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect($redirectBase, 'error=invalid_email');
}

// Header injection check
$injPattern = '/(content-type:|bcc:|cc:|to:)/i';
if (preg_match($injPattern, $name) || preg_match($injPattern, $email)) {
    redirect($redirectBase, 'error=invalid_input');
}

// Build HTML email
$subject = 'New Contact Form Submission from IESPL Website';
$emailBody = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  body {font-family: Arial, sans-serif; color:#333;}
  h2   {color:#0056b3;}
  p    {margin:0 0 10px;}
</style>
</head>
<body>
  <h2>New Contact Form Submission</h2><br>
  <p><strong>Name:</strong> {$name} </p><br>
  <p><strong>Email:</strong> {$email}</p><br>
  <p><strong>Contact:</strong> {$contact}</p><br>
  <p><strong>Message:</strong><br>
     {($message)}
  </p>
</body>
</html>
HTML;

// Send using PHPMailer
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
    $mail->addReplyTo($email, "{$name}");

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $emailBody;

    $mail->send();
    redirect($redirectBase, 'success=true');

} catch (Exception $e) {
    file_put_contents(__DIR__ . '/mail_error.log', $mail->ErrorInfo);
    redirect($redirectBase, 'error=send_failed');
}
