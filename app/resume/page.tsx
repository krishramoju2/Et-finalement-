'use client';
import { useState } from 'react';

export default function ResumeBuilder() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <main className="min-h-screen bg-resumeGray py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg resume-section">
        <h2 className="resume-header">📄 Resume Builder</h2>

        <div className="resume-item">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="resume-item">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
        </div>

        <div className="resume-item">
          <label className="block text-sm font-medium mb-1">Education</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Your educational background"
          />
        </div>

        <div className="resume-item">
          <label className="block text-sm font-medium mb-1">Work Experience</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Your work experience"
          />
        </div>

        <div className="resume-item">
          <label className="block text-sm font-medium mb-1">Skills</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List your skills"
          />
        </div>

        <div className="resume-divider" />

        <div className="mt-6 bg-resumeText text-white p-4 rounded-lg text-sm shadow">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Education:</strong> {education}</p>
          <p><strong>Experience:</strong> {experience}</p>
          <p><strong>Skills:</strong> {skills}</p>
        </div>
      </div>
    </main>
  );
}
