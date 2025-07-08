import { NextRequest, NextResponse } from 'next/server';

let feedbackList: { name: string; message: string }[] = [];

export async function GET() {
  return NextResponse.json(feedbackList);
}

export async function POST(req: NextRequest) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    feedbackList.push({ name, message });

    return NextResponse.json({ success: true, message: 'Feedback received!' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to submit feedback.' }, { status: 500 });
  }
}
