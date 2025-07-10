import Link from 'next/link';


export default function Navbar() {
  return (
      <nav className="container mx-auto w-full p-4 flex justify-between text-white">
        <Link href="/" className="text-xl font-bold">
          Kalin Chakma
        </Link>
        <div className="flex gap-6">
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
    </nav>
  );
}