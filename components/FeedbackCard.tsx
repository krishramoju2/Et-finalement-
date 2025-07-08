interface FeedbackProps {
  user: string;
  message: string;
}

export default function FeedbackCard({ user, message }: FeedbackProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
      <p className="text-sm text-gray-800 italic">"{message}"</p>
      <p className="mt-2 text-xs text-gray-500 text-right">— {user}</p>
    </div>
  );
}
