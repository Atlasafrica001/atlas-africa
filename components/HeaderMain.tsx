"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Atlas Africa"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        href="/home"
        onClick={onClick}
        className="text-white text-sm hover:text-gray-300 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/about"
        onClick={onClick}
        className="text-white text-sm hover:text-gray-300 transition-colors"
      >
        About
      </Link>
      <Link
        href="/services"
        onClick={onClick}
        className="text-white text-sm hover:text-gray-300 transition-colors"
      >
        Services
      </Link>
      <Link
        href="/blog"
        onClick={onClick}
        className="text-white text-sm hover:text-gray-300 transition-colors"
      >
        Blog
      </Link>
      <Link
        href="/consultation"
        onClick={onClick}
        className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit"
      >
        Book a Consultation
      </Link>
    </>
  );
}
