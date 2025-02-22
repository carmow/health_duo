import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800">GutBrain Health Tracker</h1>
      <p className="text-gray-600 text-center mt-2">
        Enter your symptoms and health data to get personalized recommendations.
      </p>
      <Link href="/form">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </Link>
    </div>
  );
}
