interface HRProps {
  name: string;
  email: string;
  position: string;
}

export default function HRContactCard({ name, email, position }: HRProps) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-blue-800">{name}</h4>
      <p className="text-sm text-blue-700">{position}</p>
      <a href={`mailto:${email}`} className="text-sm text-blue-500 underline">
        {email}
      </a>
    </div>
  );
}
