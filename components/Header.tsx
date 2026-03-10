'use client';

import Link from 'next/link';
import Image from 'next/image'; // ✅ add this line
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="High Professional Trading & Services Co."
              width={180}
              height={50}
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-black hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="text-black hover:text-orange-500 transition">About Us</Link>
          <Link href="/trading" className="text-black hover:text-orange-500 transition">Trading Division</Link>
          <Link href="/contracting" className="text-black hover:text-orange-500 transition">Contracting & Services</Link>
          <Link href="/projects" className="text-black hover:text-orange-500 transition">Projects</Link>
          <Link href="/contact" className="text-black hover:text-orange-500 transition">Contact Us</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-black hover:text-orange-500 transition">Home</Link>
            <Link href="/about" className="block text-black hover:text-orange-500 transition">About Us</Link>
            <Link href="/trading" className="block text-black hover:text-orange-500 transition">Trading Division</Link>
            <Link href="/contracting" className="block text-black hover:text-orange-500 transition">Contracting & Services</Link>
            <Link href="/projects" className="block text-black hover:text-orange-500 transition">Projects</Link>
            <Link href="/contact" className="block text-black hover:text-orange-500 transition">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}