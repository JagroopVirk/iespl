// src\components\career\JobApplicationModal.jsx

import { useState, useEffect } from 'react';
import '@/styles/career/jobApplicationModal.css';

export default function JobApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setSelectedJob(e.detail);
      setIsOpen(true);
    };
    window.addEventListener('open-job-modal', handler);
    return () => window.removeEventListener('open-job-modal', handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Append job data
    if (selectedJob) {
      formData.append('jobTitle', selectedJob.title || '');
      formData.append('jobDepartment', selectedJob.department || '');
    }

    try {
      const res = await fetch('../api/sendJobApp.php', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to submit');

      alert('✅ Application submitted successfully!');
      setIsOpen(false);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('❌ Failed to submit application.');
    }
  };

  if (!isOpen || !selectedJob) return null;

  return (
    <div
      className="modalBg fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h3 className="mb-4 text-2xl font-semibold">Apply for {selectedJob.title}</h3>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          action="../api/sendJobApp.php"
          encType="multipart/form-data"
        >
          {/* <form className="space-y-4" action="../api/sendJobApp.php" encType="multipart/form-data"> */}
          <div>
            <label className="mb-1 block text-base font-medium">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full rounded-md border p-2 focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-base font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full rounded-md border p-2 focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-base font-medium">Phone</label>
            <input
              type="text"
              name="contact"
              placeholder="Your phone number"
              required
              className="w-full rounded-md border p-2 focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-base font-medium">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full rounded-md border p-2 focus:ring-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-base font-medium">
              Cover Letter<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Write cover letter"
              required
              className="h-32 w-full rounded-md border p-2 focus:ring-1 focus:outline-none"
            ></textarea>
          </div>

          {/* Honeypot (spam bot trap) */}
          <div className="hidden">
            <label>Website</label>
            <input type="text" name="website" placeholder="website" />
          </div>

          <button type="submit" className="button contactBtn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
