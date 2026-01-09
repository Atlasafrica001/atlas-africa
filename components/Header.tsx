"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black rounded-b-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Atlas Africa"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/consultation"
            className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="12"
                height="10"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 6H14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 1V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11 1V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
