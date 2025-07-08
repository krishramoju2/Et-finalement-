import { NextResponse } from 'next/server';

const internships = [
  {
    id: 1,
    role: 'Machine Learning Intern',
    company: 'NVIDIA',
    location: 'Pune, India',
    duration: '3 months',
    link: 'https://www.nvidia.com/en-us/about-nvidia/careers/',
  },
  {
    id: 2,
    role: 'Web Development Intern',
    company: 'Zoho',
    location: 'Chennai, India',
    duration: '6 months',
    link: 'https://careers.zohocorp.com/',
  },
  {
    id: 3,
    role: 'Data Analyst Intern',
    company: 'Adobe',
    location: 'Remote',
    duration: '3 months',
    link: 'https://adobe.wd5.myworkdayjobs.com/',
  },
];

export async function GET() {
  return NextResponse.json(internships);
}
