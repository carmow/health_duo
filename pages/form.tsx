import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    symptoms: '',
    weight: '',
    height: '',
    mood: '',
    age: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: '/results',
      query: formData,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Enter Your Health Information</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 w-full max-w-md">
        <input type="text" name="symptoms" placeholder="Symptoms" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="mood" placeholder="Current Mood" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Get Recommendations</button>
      </form>
    </div>
  );
}
