'use client'
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className=" shadow-md rounded-xl py-6">
      <div className="container mx-auto px-100 flex justify-center space-x-12 ">
        <Link
          href="/"
          className="text-blue-500 font-bold transition-colors duration-300 text-lg"
        >
          Submit Feedback
        </Link>

        <div className="w-10px h-10 bg-blue-500"></div>

        <Link
          href="/dashboard"
          className="text-blue-500 font-bold hover:text-green-200 transition-colors duration-300 text-lg"
        >
          View Dashboard
        </Link>
      </div>
    </nav>
  );
}