import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Nutritionist Gut-Brain App</h1>
      <Link href="/input">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}
