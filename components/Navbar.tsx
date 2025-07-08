'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/forum', label: 'Forum' },
  { href: '/resume', label: 'Resume' },
  { href: '/postgrad', label: 'Postgrad' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/hackathons', label: 'Hackathons' },
  { href: '/feedback', label: 'Feedback' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 bg-white/90 shadow-md backdrop-blur-md z-50 fixed top-0 flex justify-between items-center border-b border-gray-200">
      <Link href="/" className="text-2xl font-extrabold text-purple-700 font-pacifico">
        UpSkillFam 🚀
      </Link>
      <ul className="flex gap-6 text-sm font-semibold text-gray-800">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-purple-600 transition duration-200 ${
                pathname === link.href ? 'text-purple-700 underline' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
