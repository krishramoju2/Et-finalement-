'use client';
import { useState } from 'react';

export default function PostgradProfile() {
  const [fullName, setFullName] = useState('');
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [goals, setGoals] = useState('');
  const [achievements, setAchievements] = useState('');

  return (
    <main className="min-h-screen bg-postgradBg py-10 px-4">
      <div className="max-w-4xl mx-auto postgrad-section">
        <h2 className="postgrad-header">🎓 Postgrad Profile Builder</h2>

        <div className="postgrad-field">
          <label className="postgrad-subtitle">Full Name</label>
          <input
            className="w-full border border-postgradBorder p-2 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Doe"
          />
        </div>

        <div className="postgrad-field">
          <label className="postgrad-subtitle">Degree</label>
          <input
            className="w-full border border-postgradBorder p-2 rounded"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="M.S. in Computer Science"
          />
        </div>

        <div className="postgrad-field">
          <label className="postgrad-subtitle">Institution</label>
          <input
            className="w-full border border-postgradBorder p-2 rounded"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="MIT"
          />
        </div>

        <div className="postgrad-field">
          <label className="postgrad-subtitle">Career Goals</label>
          <textarea
            className="w-full border border-postgradBorder p-2 rounded"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="Describe your aspirations and goals"
          />
        </div>

        <div className="postgrad-field">
          <label className="postgrad-subtitle">Achievements</label>
          <textarea
            className="w-full border border-postgradBorder p-2 rounded"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            placeholder="List any major achievements"
          />
        </div>

        <div className="mt-6 bg-postgradAccent text-white p-4 rounded-lg text-sm">
          <p><strong>Name:</strong> {fullName}</p>
          <p><strong>Degree:</strong> {degree}</p>
          <p><strong>Institution:</strong> {institution}</p>
          <p><strong>Goals:</strong> {goals}</p>
          <p><strong>Achievements:</strong> {achievements}</p>
        </div>
      </div>
    </main>
  );
}
