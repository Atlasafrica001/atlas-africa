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
              Meet Atlas Africa, the reason your brand suddenly needs a glow up. <br />Scrap out that Lagos influencer from your budget, we’re experts at fixing confidence issues. Of your brand, of course.
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
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
              <div className="flex gap-10 justify-start">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-atlas-gold mb-1">
                    400+
                  </div>
                  <div className="text-lg text-gray-500">Brands Elevated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    74+
                  </div>
                  <div className="text-lg text-gray-500">Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#000000] mb-1">
                    146M+
                  </div>
                  <div className="text-lg text-gray-500">Views Generated</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image - Blue tilted frame with decorative icons */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Gold background rectangle - tilted right */}
                {/* <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl transform rotate-6 scale-105"></div> */}
                
                {/* Decorative floating icons */}
                {/* Top right - Mobile Phone icon */}
                <div className="absolute top-32 -right-3 w-12 h-12 bg-[#D4AF37] border-white border-2 rounded-lg flex items-center justify-center shadow-lg z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path></svg>
                </div>
                
                {/* Top left - Camera icon */}
                <div className="absolute top-0 -left-3 w-10 h-10 bg-white border border-black rounded-lg fill-atlas-navy flex items-center justify-center shadow-lg z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currenColor" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
                </div>
                
                {/* Bottom right - Microphone */}
                <div className="absolute bottom-7 -right-6 bg-black p-2 rounded-lg flex gap-2 z-20 shadow-black shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D4AF37" viewBox="0 0 256 256"><path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path></svg>
                </div>

                {/* Bottom left - Video Camera */}
                <div className="absolute bottom-40 -left-6 bg-atlas-navy p-2 rounded-lg flex gap-2 z-20 shadow-black shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>
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
          <div className="text-center mb-10">
            <div className="bg-atlas-gold bg-opacity-25 inline-flex items-center gap-2 py-2 px-3 rounded-lg border border-black shadow-sm shadow-black mb-16">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z"></path></svg>
              CREATIVE ARSENAL
            </div>
            <h2 className="flex flex-col gap-5 text-4xl md:text-5xl font-bold mb-4">
              <div>
                <span className="text-[#0A2E5C]">SERVICES THAT</span>
              </div>
              
              <div>
                <span className="text-[#D4AF37]">AMPLIFY YOUR </span>
                <span className="text-atlas-navy">STORY</span>
              </div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-10">
            From stunning visuals to strategic campaigns, we create
            content that connects your brand with audiences across Africa and beyond.
            </p>
            {/* <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#0A2E5C] font-semibold hover:text-[#D4AF37] transition-colors"
            >
              <span>More about our work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link> */}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Service Card 1 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">TREND • TALK • TAKE OVER</p>
              <h3 className="text-xl font-bold text-atlas-gold opacity-75 mb-3">
                Digital Marketing & Social Media Management
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              You are not getting views because people scroll past mediocrity. We build communities that feel like a cult.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Campaigns that slaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>SEO that flirts with Google</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Metrics you will actually brag about</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Content Calendars that build your digital footprint</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-atlas-gold font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-40 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0000000" viewBox="0 0 256 256"><path d="M28,128a8,8,0,0,1,0-16H56a8,8,0,0,0,0-16H40a24,24,0,0,1,0-48,8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H40a8,8,0,0,0,0,16H56a24,24,0,0,1,0,48,8,8,0,0,1-16,0ZM232,56V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v40H160V160H80a8,8,0,0,1,0-16h80V112H104a8,8,0,0,1,0-16H216V64H96a8,8,0,0,1,0-16H224A8,8,0,0,1,232,56Zm-56,88h40V112H176Zm40,48V160H176v32Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">SHOOT • HOOK • CASHOUT</p>
              <h3 className="text-xl font-bold text-atlas-gold opacity-75 mb-3">
                Advertising & Performance Marketing
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Every brand runs ads. Only a few trend. <br />
                Atlas goes even further, we convert.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Content Offers that slap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Targeting audience sharper than Lagos hairline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Campaigns that actually have personality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Audience that never forget your name</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-atlas-gold font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">DESIGN • CODE • SLAY</p>
              <h3 className="text-xl font-bold text-atlas-gold opacity-75 mb-3">
                Website/App Development & Digital Experience
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              If your website is still stuck in 2015, we need to talk. Hypemen do not wear princess dresses, so why does your 24/7 hypeman look like a brochure?
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Fast, sexy, functional builds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>User experience smoother than silk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Responsive? Duh!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Designed to impress (and express)</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-atlas-gold font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-atlas-navy bg-opacity-40 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">SHOOT • SCRIPT • SERVE</p>
              <h3 className="text-xl font-bold text-[#000000] mb-3">
                Media Production & Event Coverage
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                When you're funny and unforgettable, your content becomes an absolute cinema. Why be boring when you can be binge-watched?
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Capturing the Important event moments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Storytelling with drama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Copy that marries conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Videos with vibe</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#000000] font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-atlas-navy bg-opacity-40 rounded-lg flex items-center justify-center mb-4 rotate-90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">PLAN • POSITION • PROFIT</p>
              <h3 className="text-xl font-bold text-[#000000] mb-3">
                Consultation Strategy
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              We tell you what's wrong, but nicely (Okay, not really). Because your brand doesn't need a miracle, it needs a plan that makes sense - and a team that clocks it.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Realistic, ROI-driven growth plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Long-term game plans with short-term wins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Bold marketing blueprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Confidence with clarity and charisma</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#000000] font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-100 border border-black rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden z-10">
              <div className="absolute inset-0">
                <Image
                  src="/textured-pattern.jpg"
                  alt="African Theme Pattern"
                  fill
                  className="object-cover object-center opacity-20 -z-10"
                  priority
                  quality={90}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-atlas-navy bg-opacity-40 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z"></path></svg>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold">DEFINE • DIFFERENTIATE • DOMINATE</p>
              <h3 className="text-xl font-bold text-[#000000] mb-3">
                Brand Strategy & Creative Development
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              We give your brand an IGJB accent and a Lagos influencer attitude. Obsession is inevitable.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Brand personality building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Brand story that never fades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Niche domination strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2E5C] mt-1">•</span>
                  <span>Emotional connection design</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#000000] font-bold hover:text-[#D4AF37] transition-colors"
              >
                GET STARTED →
              </Link>
            </div>
          </div>

          {/* Book a Consultation Button */}
          <div className="text-center">
            <Link
              href="/consultation"
              className="
                inline-flex items-center gap-2
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* How It Started vs How It's Going Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Story */}
            <div>
              <div className="inline-flex items-center gap-4 text-start mb-4 bg-atlas-gold bg-opacity-35 px-4 py-2 rounded-lg border border-black shadow-sm shadow-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path></svg>
                <span className="text-sm font-semibold text-[#000000] uppercase tracking-wider">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-start mb-7">
                <span className="text-[#0A2E5C]">HOW IT</span>{" "} <br />
                <span className="text-[#D4AF37]">STARTED VS</span>{" "} <br />
                <span className="text-[#0A2E5C]">HOW IT'S GOING</span>{" "}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
              Atlas started because two creative minds, Lekan and Olubukunmi got 
              tired of traditional safe marketing that wasn't yielding results. The world was evolving, and marketers had to catch up. 
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
              They realized that with the Gen-Z attention span shorter than a yardstick, 
              they needed to bring in the big guns: Sales and content funnel. And now, some good years later, we can brag that if your marketing is not bold, it's not Atlas.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z"></path></svg>
                  </span>
                  <span>Creative storytelling across Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></svg>
                  </span>
                  <span>A powerhouse of storytellers and creatives</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
                  </span>
                  <span>Strategic campaigns that convert</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M224,152V136a96.37,96.37,0,0,0-64-90.51V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40v5.49A96.37,96.37,0,0,0,32,136v16a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-16-16v16H160V62.67A80.36,80.36,0,0,1,208,136ZM144,40V152H112V40ZM48,136A80.36,80.36,0,0,1,96,62.67V152H48Zm176,56H32V168H224v24Z"></path></svg>
                  </span>
                  <span>Built with Africa’s bold dreams.</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Photo Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-1.png"
                    alt="Team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-3.png"
                    alt="Creative session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-2.png"
                    alt="Project work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/photoshoot-4.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="inline-flex bg-atlas-gold bg-opacity-60 p-2 rounded-xl w-12 absolute -top-4 -left-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
              </div>
              <div className="inline-flex bg-atlas-navy bg-opacity-60 p-2 rounded-xl w-12 absolute -bottom-6 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>
              </div>
            </div>
          </div>
          
          {/* Book a Consultation Button */}
          <div className="text-center mt-16">
            <Link
              href="/consultation"
              className="
                inline-flex items-center gap-2
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
              Book a Consultation
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
            <span className="text-[#0A2E5C]">Some call it a portfolio <br /> We call it </span>
            <span className="text-[#D4AF37]">evidence</span>
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
