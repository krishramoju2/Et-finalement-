'use client';
import { useEffect, useState } from 'react';

interface Post {
  username: string;
  message: string;
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState('');
  const username = typeof window !== 'undefined' ? localStorage.getItem('currentUser') || 'Anonymous' : 'Anonymous';

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('forumPosts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { username, message };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('forumPosts', JSON.stringify(updatedPosts));
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-purple-50 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">💬 Community Forum</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
            placeholder="Share your thoughts on what makes a great SDE in 2025..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Post
          </button>
        </form>

        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="border border-purple-100 rounded-lg p-4 bg-purple-50">
                <p className="text-sm text-purple-700 font-semibold">@{post.username}</p>
                <p className="text-gray-800 mt-1">{post.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No posts yet. Be the first to share something!</p>
          )}
        </div>
      </div>
    </main>
  );
}
