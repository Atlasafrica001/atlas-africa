"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

export default function HomePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }

      // Success
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        projectDetails: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit consultation request. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleViewWorkClick(event: React.MouseEvent<HTMLButtonElement>): void {
    // Example: scroll to a portfolio section or navigate to '/work'
    // For now, let's smoothly scroll to an element with id="portfolio", if it exists:
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: redirect
      window.location.href = "/work";
    }
  }

  return (
    <div className="min-h-screen w-fit md:w-full">
      <HeaderMain />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-[#0A2E5C]">CREATE</span>
                <br />
                <span className="text-[#D4AF37]">CAPTIVATE</span>
                <br />
                <span className="text-[#0A2E5C]">CONVERT</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                Atlas Africa is a full-service creative agency built for brands
                that refuse to be basic. We don't just follow trends — we set
                them.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 my-12">
                
                <Link
                  href="#contact"
                  className="
                    flex items-center gap-2
                    bg-[#C3A438]/60
                    border-2 border-black
                    text-black
                    px-4 py-2
                    rounded-lg
                    font-semibold
                    tracking-wide
                    text-sm md:text-base
                    transition-colors
                    hover:bg-atlas-navy hover:text-white
                    fill-black hover:fill-white
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
                  </svg>
                  Book a Consultation
                </Link>

                <button
                  onClick={handleViewWorkClick}
                  className="
                    flex items-center gap-2
                    bg-white
                    border-2 border-black
                    text-black
                    px-4 py-2
                    rounded-lg
                    font-semibold
                    text-sm md:text-base
                    transition-colors
                    hover:bg-[#C4A037] hover:text-white
                    fill-black hover:fill-white
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.4,114.49,88.32,26.35A16,16,0,0,0,64,39.87V216.13A16,16,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
                  </svg>
                  View Our Work
                </button>

              </div>

              

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    200+
                  </div>
                  <div className="text-sm text-gray-500">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    74+
                  </div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    140M+
                  </div>
                  <div className="text-sm text-gray-500">Total Reach</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image - Blue tilted frame with decorative icons */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Gold background rectangle - tilted right */}
                {/* <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl transform rotate-6 scale-105"></div> */}
                
                {/* Decorative floating icons */}
                {/* Top right - Star icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D4AF37] border-white border-2 rounded-full flex items-center justify-center shadow-lg z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                
                {/* Top left - Plus icon */}
                <div className="absolute -top-2 -left-6 w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-lg z-20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="3">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                
                {/* Bottom right - Microphone */}
                <div className="absolute bottom-10 -right-6 bg-atlas-navy p-2 rounded-full flex gap-2 z-20 transform rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D4AF37" viewBox="0 0 256 256"><path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path></svg>
                </div>
                
                {/* Image container - tilted left */}
                <div className="relative transform">
                  <div className="rounded-2xl shadow-2xl">
                    <Image
                      src="/atlas-team-1.png"
                      alt="Atlas Africa Team"
                      width={500}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#0A2E5C]">SERVICES THAT</span>
              <br />
              <span className="text-[#D4AF37]">AMPLIFY YOUR STORY</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Whether you're a high-growth startup or an enterprising startup eager to make
              an impact, we're in the business of helping brands look good, sound smart and
              show up everywhere that matters.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
            >
              <span>More about our work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Service Card 1 */}
            <div className="bg-[#FFF8E7] border border-[#D4AF37] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Brand Strategy & Creative
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                We build brands that people remember. From naming and positioning
                to visual identity, we create a brand that's unmissable.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Brand Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Visual Identity Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Brand Guidelines</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#FFF8E7] border border-[#D4AF37] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M8 21h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 17v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                We don't just post — we strategize, optimize, and convert. Social
                media, SEO, ads: we do it all.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Social Media Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>SEO & Content Marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Paid Advertising (Google, Meta)</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#FFF8E7] border border-[#D4AF37] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 2v20M8 2v20M2 8h20M2 16h20"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Campaign Strategy
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                From concept to execution, we create campaigns that break through
                the noise and deliver results.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Integrated Campaign Planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Product Launch Campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Performance Analytics</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  <path
                    d="M12 6v6l4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Media Production & Event Coverage
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Whether it's a product shoot, event coverage, or a viral video,
                we bring your story to life.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Photography & Videography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Event Coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Post-Production & Editing</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Website Development
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                We build websites that don't just look good — they convert visitors
                into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Custom Website Design & Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Maintenance & Support</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                Performance & Strategy
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Data-driven marketing that works. We track, optimize, and scale
                your campaigns for maximum ROI.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Performance Marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Marketing Analytics & Reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Strategic Consulting</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* How It Started vs How It's Going Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-[#0A2E5C]">HOW IT</span>{" "}
            <span className="text-[#D4AF37]">STARTED</span>{" "}
            <span className="text-[#0A2E5C]">VS</span>
            <br />
            <span className="text-[#0A2E5C]">HOW IT'S</span>{" "}
            <span className="text-[#D4AF37]">GOING</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Story */}
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Atlas Africa didn't start with fancy offices or blue-chip clients.
                It started with a bold idea — help African brands tell stories
                that move people.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We started as a small crew armed with cameras, laptops, and way
                too much confidence. Fast forward to today: we've launched
                campaigns, redefined brands, and helped businesses go from
                overlooked to overbooked.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>A journey from startup hustle to creative powerhouse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>From local projects to continental campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Building brands that people actually care about</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Photo Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-1.png"
                    alt="Team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-2.png"
                    alt="Creative session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-3.png"
                    alt="Project work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-4.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Book a Consultation Button */}
          <div className="text-center mt-12">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#C4A037] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M3 10h18M8 2v4M16 2v4" />
              </svg>
              <span>BOOK A CONSULTATION</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              OUR WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#0A2E5C]">Some call it a portfolio</span>
            <br />
            <span className="text-[#D4AF37]">We call it evidence</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We don't just talk the talk — we deliver results. Here's proof that
            our strategies work, our campaigns perform, and our creative makes
            waves.
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-orange-500 opacity-20"></div>
                <Image
                  src="/temitope.png"
                  alt="Brand Campaign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                TechStartup Rebrand Campaign
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Complete brand overhaul that increased brand recognition by 300%
                and drove a 150% boost in website traffic.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Branding
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Strategy
                </span>
              </div>
              <Link
                href="/portfolio/techstartup-rebrand"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
                <Image
                  src="/bukunmi.png"
                  alt="Social Campaign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                #GoViralChallenge Launch
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                A social media campaign that generated 50M+ impressions and made
                the brand a household name.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Social Media
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Campaign
                </span>
              </div>
              <Link
                href="/portfolio/goviral-challenge"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-purple-500 opacity-20"></div>
                <Image
                  src="/sharon.png"
                  alt="Product Launch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                Product Launch That Sold Out
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Strategic product launch campaign that sold out inventory in 48
                hours and built a waitlist of 10,000+.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Launch
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Marketing
                </span>
              </div>
              <Link
                href="/portfolio/product-launch"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
                <Image
                  src="/demilade.png"
                  alt="Event Coverage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                Lagos Fashion Week Coverage
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Complete event production and coverage that captured the essence
                of Africa's biggest fashion event.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Production
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Events
                </span>
              </div>
              <Link
                href="/portfolio/fashion-week"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Portfolio Item 5 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-yellow-500 opacity-20"></div>
                <Image
                  src="/shile.png"
                  alt="Content Strategy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                6-Month Content Strategy
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Developed and executed a content strategy that grew organic reach
                by 400% and doubled engagement rates.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Content
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Strategy
                </span>
              </div>
              <Link
                href="/portfolio/content-strategy"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Portfolio Item 6 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-green-500 opacity-20"></div>
                <Image
                  src="/olalekan.png"
                  alt="Website Redesign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-2">
                E-commerce Website Redesign
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Redesigned a clunky e-commerce site, resulting in a 200%
                increase in conversions and 85% faster load times.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Web Design
                </span>
                <span className="text-xs bg-[#FFF8E7] text-[#D4AF37] px-3 py-1 rounded-full">
                  Development
                </span>
              </div>
              <Link
                href="/portfolio/ecommerce-redesign"
                className="inline-flex items-center gap-2 text-[#0A2E5C] text-sm font-semibold hover:text-[#D4AF37] transition-colors"
              >
                <span>Read full case study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* View All Work Button */}
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-[#D4AF37] text-[#0A2E5C] px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors"
            >
              VIEW ALL WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
              THE TEAM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-[#0A2E5C]">The </span>
            <span className="text-[#D4AF37]">Troubleshooters </span>
            <span className="text-[#0A2E5C]">Behind</span>
            <br />
            <span className="text-[#0A2E5C]">Your Favorite Campaigns</span>
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/temitope.png"
                  alt="Temitope"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Temitope</h3>
              <p className="text-sm text-gray-600">Creative Director</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/bukunmi.png"
                  alt="Bukunmi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Bukunmi</h3>
              <p className="text-sm text-gray-600">Brand Strategist</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/olalekan.png"
                  alt="Olalekan"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Olalekan</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/shile.png"
                  alt="Shile"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Shile</h3>
              <p className="text-sm text-gray-600">Marketing Lead</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/sharon.png"
                  alt="Sharon"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Sharon</h3>
              <p className="text-sm text-gray-600">Content Creator</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/demilade.png"
                  alt="Demilade"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#0A2E5C] mb-1">Demilade</h3>
              <p className="text-sm text-gray-600">Media Producer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold border border-black rounded-xl px-2 py-1 drop-shadow-md shadow-black text-black uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#0A2E5C]">Ready To Enter Your</span>
            <br />
            <span className="text-[#D4AF37]">Rebrand</span>{" "}
            <span className="text-[#0A2E5C]">Era?</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Let's turn your brand into the main character. Whether you need a
            full rebrand, a viral campaign, or just someone to make your brand
            less boring, we got you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Your Free Consultation Form */}
            <section id="consultation-form" className="bg-white scroll-mt-20">
              <div className="max-w-2xl mx-auto px-6">

                {/* Success Message */}
                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="text-green-800 font-semibold">Success! 🎉</h3>
                        <p className="text-green-700 text-sm mt-1">
                          Thank you for your consultation request! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Card */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-3">
                          Start Your Journey
                        </h2>
                        <p className="text-gray-600">
                        Tell us about your business and marketing goals. We'll get back to 
                        you in less than 24hours.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 XXX XXX XXXX"
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tell Us About Your Project *
                        </label>
                        <textarea
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleChange}
                          placeholder="Describe your business, target market, and explain your goals..."
                          required
                          rows={5}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none text-sm"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#0A2E5C] text-white py-3.5 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Submitting...' : 'Submit Consultation Request'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted by Atlas Africa regarding your consultation request.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <div className="flex flex-col justify-end rounded-2xl w-xl space-y-10">
              <div className="border border-black p-3 rounded-2xl">
                <h3 className="text-xl">📍 Lagos, Nigeria</h3>
                <div className="flex flex-col gap-2 pl-5 mt-3">
                  <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                    <p>+234 123 456 789</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                    <p>info@atlasafrica.org</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden border border-black p-3 rounded-2xl bg-atlas-gold bg-opacity-35 z-10">
                <div className="absolute inset-0">
                  <Image
                    src="/textured-pattern.jpg"
                    alt="African theme pattern"
                    fill
                    className="object-cover object-center opacity-25 -z-10"
                    priority
                    quality={90}
                  />
                </div>
                <div className="">
                  <h3 className="text-xl">📥 Contact & Support</h3>
                  <div className="flex flex-col gap-2 pl-5 mt-3">
                    <div className="flex gap-3 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                      <p>+234 123 456 789</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                      <p>info@atlasafrica.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden border border-black p-3 rounded-2xl bg-atlas-navy bg-opacity-35 z-10">
                <div className="absolute inset-0">
                  <Image
                    src="/textured-pattern.jpg"
                    alt="African theme pattern"
                    fill
                    className="object-cover object-center opacity-25 -z-10"
                    priority
                    quality={90}
                  />
                </div>
                <div className="">
                    <h3 className="text-xl">💼 Partnership & Brand</h3>
                    <div className="flex flex-col gap-2 pl-5 mt-3">
                      <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                        <p>+234 123 456 789</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                        <p>info@atlasafrica.org</p>
                      </div>
                    </div>
                  </div>
              </div>
              {/* <h3 className="text-2xl font-bold text-[#0A2E5C] mb-6">
                Or Let's Chat
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    📍 Lagos, Nigeria
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Victoria Island, Lagos
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    📧 Email Us
                  </h4>
                  <p className="text-gray-700 text-sm">hello@atlasafrica.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    📱 Call Us
                  </h4>
                  <p className="text-gray-700 text-sm">+234 1 234 5678</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2E5C] mb-3">
                    🕐 Office Hours
                  </h4>
                  <p className="text-gray-700 text-sm">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-gray-700 text-sm">Sat: 10AM - 4PM</p>
                </div>
                <div className="pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-[#0A2E5C] mb-3">
                    📌 Partnership & Brand
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Interested in partnerships, collaborations, or media
                    inquiries?
                  </p>
                  <a
                    href="mailto:partnerships@atlasafrica.com"
                    className="text-[#D4AF37] hover:underline text-sm font-medium"
                  >
                    partnerships@atlasafrica.com
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
