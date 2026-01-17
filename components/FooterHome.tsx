"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FooterHome() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration
    console.log("Newsletter signup:", newsletterEmail);
    alert("Thank you for subscribing!");
    setNewsletterEmail("");
  };

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/footer-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* Newsletter Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-white">GET </span>
                <span className="text-[#D4AF37]">CREATIVE INSPIRATION</span>
                <br />
                <span className="text-white">DELIVERED WEEKLY</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join 5,000+ creatives, marketers, and brand builders who get our
                weekly newsletter packed with trends, tips, and insights.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex gap-2"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="bg-[#D4AF37] text-[#0A2E5C] px-6 py-3 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>

        {/* Content - positioned above pattern */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Agency */}
            <div>
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Atlas Africa"
                  width={150}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your creative partner for visual storytelling that amplifies
                African brands on the global stage. From concept to creation, we
                bring your vision to life.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                      fill="#1a1a1a"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Campaign Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Media Production
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Strategic Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Industry Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Brand Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 Atlas Africa. All rights reserved. •{" "}
                <span className="text-[#D4AF37]">Creative Excellence</span>
              </p>
              <div className="text-gray-500 text-sm">
                Made with ❤️ in Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
