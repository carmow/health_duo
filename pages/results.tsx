import { useRouter } from 'next/router';
import React from 'react';

export default function Results() {
  const router = useRouter();
  const { symptoms, weight, height, mood, age } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Your Health Recommendations</h2>
      <div className="mt-4 p-4 bg-white shadow-md rounded-lg w-full max-w-md">
        <p><strong>Symptoms:</strong> {symptoms}</p>
        <p><strong>Weight:</strong> {weight} kg</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Mood:</strong> {mood}</p>
        <p><strong>Age:</strong> {age} years</p>
        <div className="mt-4">
          <p className="font-semibold text-blue-500">Recommended Vitamins & Treatments:</p>
          <ul className="list-disc list-inside">
            <li>Vitamin C for immunity</li>
            <li>Magnesium for relaxation</li>
            <li>Probiotics for gut health</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
