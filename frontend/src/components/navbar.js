import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-lg font-bold">GutBrain</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/input">Check Symptoms</Link>
      </div>
    </nav>
  );
}
