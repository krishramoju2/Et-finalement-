interface JobProps {
  title: string;
  company: string;
  location: string;
  link: string;
}

export default function JobCard({ title, company, location, link }: JobProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-purple-500 hover:border-purple-700"
    >
      <h3 className="text-lg font-bold text-purple-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{company}</p>
      <p className="text-xs text-gray-500">{location}</p>
    </a>
  );
}
