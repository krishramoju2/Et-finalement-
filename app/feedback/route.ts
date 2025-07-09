let feedbacks: { name: string; message: string }[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message } = body;

  if (!name || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  feedbacks.push({ name, message });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

export async function GET() {
  return new Response(JSON.stringify(feedbacks), { status: 200 });
}
