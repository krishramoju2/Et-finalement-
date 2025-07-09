// In-memory store for users and sessions (demo only)
const users = new Map<string, { password: string }>();
const sessions = new Map<string, string>();

export function registerUser(username: string, password: string): boolean {
  if (users.has(username)) return false;
  users.set(username, { password });
  return true;
}

export function loginUser(username: string, password: string): boolean {
  const user = users.get(username);
  return user?.password === password;
}

export function createSession(username: string): string {
  const sessionId = Math.random().toString(36).substring(2);
  sessions.set(sessionId, username);
  return sessionId;
}

export function getUserFromSession(sessionId: string): string | null {
  return sessions.get(sessionId) ?? null;
}
