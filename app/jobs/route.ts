import { NextResponse } from 'next/server';
import jobData from '@/public/sample-data/jobs.json';

export async function GET() {
  return NextResponse.json(jobData);
}
