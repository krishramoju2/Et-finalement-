import { NextResponse } from 'next/server';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Google',
    location: 'Bangalore, India',
    posted: '2025-07-07',
    link: 'https://careers.google.com/jobs/results',
  },
  {
    id: 2,
    title: 'Backend Engineer Intern',
    company: 'Amazon',
    location: 'Hyderabad, India',
    posted: '2025-07-05',
    link: 'https://www.amazon.jobs/en',
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    company: 'Microsoft',
    location: 'Remote',
    posted: '2025-07-03',
    link: 'https://careers.microsoft.com/',
  },
];

export async function GET() {
  return NextResponse.json(jobs);
}
