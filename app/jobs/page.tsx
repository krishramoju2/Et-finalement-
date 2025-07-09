'use client';
import { useEffect, useState } from 'react';

interface Job {
  title: string;
  company: string;
  location: string;
  url: string;
}

export default function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('/jobs/route')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <h2 className="text-3xl font-bold mb-6">📢 Latest Job Openings</h2>
      <div className="grid gap-4">
        {jobs.map((job, idx) => (
          <a key={idx} href={job.url} target="_blank" className="block p-4 bg-white shadow-md border-l-4 border-blue-400 rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-700">{job.company} — {job.location}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
