import { NextResponse } from 'next/server';

let forumPosts = [
  {
    id: 1,
    author: 'Jane Doe',
    content: 'Consistency is key to becoming a great SDE in 2025!',
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    author: 'John Smith',
    content: 'Build real-world projects, not just Leetcode.',
    timestamp: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(forumPosts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newPost = {
    id: forumPosts.length + 1,
    author: body.author || 'Anonymous',
    content: body.content || '',
    timestamp: new Date().toISOString(),
  };
  forumPosts.unshift(newPost);
  return NextResponse.json({ message: 'Post added successfully', post: newPost });
}
