export default function Footer() {
  return (
    <footer className="mt-20 text-center py-6 bg-purple-100 text-purple-900 text-sm border-t border-purple-200">
      <p>© {new Date().getFullYear()} UpSkillFam. All rights reserved.</p>
      <p className="mt-1">Built with ❤️ for future SDEs.</p>
    </footer>
  );
}
