"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import WaitlistForm from '@/components/WaitlistForm';
import CountdownTimer from "@/components/CountdownTimer";
import VerticalCenterSlideshow from "@/components/VerticalCenterSlideshow";

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
    <div className="min-h-screen flex flex-col w-fit md:w-full">
      <Header />

      {/* Hero Section with Studio Lights Background */}
      <section className="relative overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Studio Lights"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-atlas-gold bg-opacity-25 rounded-xl px-5 py-3">
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
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm font-medium text-black">
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
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              If bold insights and creative trends are your thing, you've landed at the right spot!
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="relative flex justify-center mt-8 md:-mt-16 mb-16 mx-14 md:mx-0">
        <CountdownTimer />
      </section>

      {/* Add waitlist form */}
      <section className="relative overflow-hidden py-20 md:py-36 md:-mt-28 bg-[#C3A438]/25" 
      // style={{
      //     backgroundImage: "url('/textured-pattern.jpg')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundColor: "#C3A438",
      //   }}
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <Image
              src="/textured-pattern.jpg"
              alt="African theme pattern"
              fill
              className="object-cover object-center opacity-25 -z-10"
              priority
              quality={90}
            />
          </div>
        {/* <div className="absolute">
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-atlas-navy mb-4">
              WHAT'S THE HOLD UP?
            </h2>
            <p className="text-md text-gray-900">
              Don't you want access to free digital growth resources, expert-led consultation sessions, a private disruptive marketing community, free networking events, practical tools and insights, and real-world case studies you can use to grow your business? <br /><br /> Sign up fast, or we'll move on without you, we don't have time.
            </p>
          </div>
          
          <WaitlistForm />
        </div>

        {/* Services Preview Boxes */}
        <div className="max-w-6xl mx-auto my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:h-[420px]">

          
          {[
            {
              title: "DIGITAL MARKETING & SOCIAL MEDIA MANAGEMENT",
              desc: "Content strategy, growth systems, and platform-specific execution."
            },
            {
              title: "ADVERTISING & INFOGRAPHIC DESIGN",
              desc: "High-conversion ad creatives and visual storytelling."
            },
            {
              title: "WEBSITE CREATION",
              desc: "Conversion-focused websites built for speed and clarity."
            },
            {
              title: "STRATEGIC CONSULTING",
              desc: "Brand audits, growth planning, and execution frameworks."
            },
            {
              title: "ADS SPECIALIZATION",
              desc: "Performance marketing across Meta, Google, and emerging platforms."
            },
            {
              title: "BRAND POSITIONING",
              desc: "Messaging, identity, and cultural relevance engineering."
            }
          ].map((item, idx) => {
            const [open, setOpen] = useState(false);

            return (
              <div
                key={idx}
                onClick={() => setOpen(!open)}
                className="
                  relative group cursor-pointer
                  lg:flex-1
                  min-h-[220px]
                  bg-gradient-to-br from-atlas-navy via-[#0A2E5C] to-black
                  rounded-xl mx-5 md:mx-0 overflow-hidden
                  transition-all duration-500 ease-out
                  lg:hover:flex-[3]
                "
              >

                {/* Main Content */}
                <div className="h-full flex items-center justify-center p-6">
                  <p
                    className="
                      text-white font-bold text-center
                      opacity-100 lg:opacity-40 lg:group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  >
                    {item.title}
                  </p>
                </div>

                {/* Extra Details */}
                <div
                  className={`
                    absolute bottom-0 left-0 w-full
                    bg-atlas-gold/90 backdrop-blur-md
                    text-white text-sm px-5 py-4
                    transition-transform duration-500 ease-out
                    lg:translate-y-full lg:group-hover:translate-y-0
                    ${open ? "translate-y-0" : "translate-y-full"}
                    lg:pointer-events-none
                  `}
                >
                  {item.desc}
                </div>

              </div>
            );
          })}


        </div>
      </div>

      </section>

      {/* <div className="flex flex-col my-10 items-center">
        <h2 className="text-2xl text-center font-bold text-black mb-5">
          We Love Fun, And We Know How To Ball
        </h2>
        <div className="flex gap-5 items-center">
        <Image
          src="/atlas-boys-1.png"
          alt="Atlas Africa Team"
          width={250}
          height={300}
          className="h-auto"
        />
        <Image
          src="/atlas-girls-1.png"
          alt="Atlas Africa Team"
          width={250}
          height={300}
          className="h-auto"
        />
        <Image
          src="/atlas-team-4.png"
          alt="Atlas Africa Team"
          width={250}
          height={300}
          className="h-auto"
        /></div>
      </div> */}


      {/* Video Section */}
      <section className="mt-0 md:-mt-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-4">
              See What's Coming
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get a sneak peek at what we're building and why so many 
              are joining our waitlist.
            </p>
          </div>

          {/* Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5A-imwqIh9w"
                  title="Atlas Africa Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 text-center">
              {/* <p className="text-gray-600 mb-4">
                Watch our 3-minute introduction to discover how Atlas Africa is revolutionizing 
                marketing for African brands and businesses worldwide.
              </p> */}
              
              {/* CTA Below Video */}
              <div className="inline-flex items-center gap-2 text-[#D4AF37] font-medium">
                <span>Not on the waitlist yet?</span>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="underline hover:text-[#C4A037] transition-colors"
                >
                  Join now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Brand Statement Section */}
      <section className="-mt-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-start">
                <span className="text-[#0A2E5C] mt-4">WE DON'T JUST </span>
                <br />
                <span className="text-[#D4AF37] mt-4">TELL STORIES</span>
                <br />
                <span className="text-[#0A2E5C] mt-4">WE CREATE </span>
                <br />
                <span className="text-[#D4AF37] mt-4">CULTURE</span>
                <span className="text-[#0A2E5C] mt-4">.</span>
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

            </div>

            {/* Visual Element - Vertical Slideshow of Team Images */}
            <div className="w-full max-w-sm h-[360px] md:h-[520px] mx-auto">
              <VerticalCenterSlideshow />
            </div>
          </div>

          {/* Book Consultation Button */}
          <div className="mt-36 flex justify-center">
            <Link href="/consultation" className="bg-[#D4AF37] border border-[#000000] text-[#000000] bg-opacity-50 px-6 py-2 rounded-lg font-medium shadow-sm shadow-black hover:bg-atlas-gold hover:text-white transition-colors flex items-center gap-2">
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
