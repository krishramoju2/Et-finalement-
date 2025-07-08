'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(form.username);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === form.password) {
        localStorage.setItem('currentUser', form.username);
        router.push('/');
      } else {
        setError('Incorrect password');
      }
    } else {
      localStorage.setItem(form.username, JSON.stringify(form));
      localStorage.setItem('currentUser', form.username);
      router.push('/');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">🔐 Sign In / Register</h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
          Submit
        </button>
      </form>
    </main>
  );
}
