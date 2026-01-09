"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration - Add email to waitlist
    console.log("Email submitted:", email);
    alert("Thank you! We'll notify you when we launch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Studio Lights Background */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Hero Background Image with Studio Lights */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Studio Lights"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#F5F1E8] border border-[#D4AF37] rounded-full px-4 py-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-[#0A2E5C]">THE </span>
              <span className="text-[#D4AF37]">ATLAS AFRICA</span>
              <br />
              <span className="text-[#0A2E5C]">EXPERIENCE</span>
              <br />
              <span className="text-[#0A2E5C]">IS COMING SOON</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bold insights, creative trends, and stories that move Africa
              forward.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-16">
            <CountdownTimer />
          </div>

          {/* Email Capture Form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleNotifyMe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#C4A037] transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Portfolio Preview Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="aspect-[3/4] bg-gray-300 rounded-lg"></div>
            <div className="aspect-[3/4] bg-gray-700 rounded-lg"></div>
            <div className="aspect-[3/4] bg-gray-800 rounded-lg"></div>
            <div className="aspect-[3/4] bg-gray-700 rounded-lg"></div>
            <div className="aspect-[3/4] bg-gray-800 rounded-lg"></div>
            <div className="aspect-[3/4] bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-[#0A2E5C]">WE DON'T JUST </span>
                <span className="text-[#D4AF37]">TELL STORIES</span>
                <br />
                <span className="text-[#0A2E5C]">WE CREATE </span>
                <span className="text-[#D4AF37]">CULTURE.</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Atlas Africa is where creativity meets impact. We're the team
                  your favorite brands call when they're tired of being mid. We
                  craft stories that hit hard, look good, and move people — from
                  Lagos to the world.
                </p>
                <p>
                  Think bold visuals, viral campaigns, and strategies that
                  actually make sense. We blend Gen Z energy with timeless
                  storytelling to keep your brand iconic — not just relevant.
                </p>
              </div>

              {/* Book Consultation Button */}
              <div className="mt-8">
                <button className="bg-[#F5F1E8] border border-[#D4AF37] text-[#0A2E5C] px-6 py-3 rounded-lg font-medium hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 10h18M8 2v4M16 2v4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Book a Consultation
                </button>
              </div>
            </div>

            {/* Visual Element - Placeholder for folder graphic */}
            <div className="relative">
              <div className="relative z-10">
                {/* Large folder shape */}
                <div className="w-full aspect-[4/3] bg-[#D4AF37] rounded-lg shadow-2xl transform rotate-3">
                  <div className="absolute top-0 left-0 w-1/3 h-12 bg-[#C4A037] rounded-t-lg"></div>
                </div>
                {/* Medium folder */}
                <div className="absolute bottom-8 right-8 w-3/4 aspect-[4/3] bg-[#C4A037] rounded-lg shadow-xl transform -rotate-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
