interface HackathonProps {
  name: string;
  date: string;
  location: string;
  link: string;
}

export default function HackathonCard({ name, date, location, link }: HackathonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow hover:shadow-lg transition border border-purple-200"
    >
      <h3 className="text-lg font-bold text-purple-800">{name}</h3>
      <p className="text-sm text-gray-700">{date}</p>
      <p className="text-xs text-purple-700 italic">{location}</p>
    </a>
  );
}
