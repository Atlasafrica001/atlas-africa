"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <HeaderMain />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 WE'RE REDEFINING STORYTELLING
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-[#0A2E5C]">DISRUPT</span>
                <br />
                <span className="text-[#0A2E5C]">THE </span>
                <span className="text-[#D4AF37]">NORM</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
                At Atlas Africa, we don't do cookie-cutter solutions. Our services
                are built to help you stand out, drive results, and build a brand
                that people actually care about.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    200+
                  </div>
                  <div className="text-sm text-gray-500">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    150+
                  </div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-1">
                    50M+
                  </div>
                  <div className="text-sm text-gray-500">Total Reach</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="#consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                LET'S GET STARTED
              </Link>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/atlas-team-2.png"
                  alt="Atlas Africa Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Header */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A THOUGHTFUL APPROACH TO HELPING YOU STAND OUT, GROW, AND WIN OVER YOUR TARGET
            AUDIENCE WITH CLARITY, CREATIVITY, AND POWERFUL STRATEGIC EXECUTION.
          </p>
        </div>
      </section>

      {/* Service 01: Digital Marketing & Social Media Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>

            {/* Right - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 01
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                DIGITAL MARKETING<br />
                & SOCIAL MEDIA<br />
                MANAGEMENT
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your brand deserves more than just "posting." We build strategies that
                turn followers into customers and campaigns that actually perform. From
                content creation to ad management, we handle it all.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Social Media Strategy & Content Planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Platform Management (Instagram, TikTok, Twitter, LinkedIn)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Community Engagement & Growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Paid Social Advertising (Meta, Google Ads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Performance Analytics & Reporting</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Advertising & Info-graphic Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 02
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                ADVERTISING &<br />
                INFO-GRAPHIC<br />
                DESIGN
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ATTENTION-GRABBING CAMPAIGNS BUILT FOR RESULTS. WE MAKE SURE YOUR
                BRAND DOESN'T JUST GET SEEN — IT GETS REMEMBERED AND DRIVES ACTION.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Ad Campaign Strategy & Execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Info-graphic Design for Reports, Presentations & Social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Visual Content for Ads (Static & Motion Graphics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Data Visualization & Storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Multi-Platform Optimization</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>

            {/* Right - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Service 03: Website Creation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>

            {/* Right - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 03
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                WEBSITE CREATION
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                YOUR WEBSITE ISN'T JUST A DIGITAL BUSINESS CARD — IT'S YOUR MOST
                POWERFUL MARKETING TOOL. WE BUILD SITES THAT LOOK STUNNING, LOAD FAST,
                AND CONVERT VISITORS INTO PAYING CUSTOMERS.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Custom Website Design & Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>E-commerce Integration (Shopify, WooCommerce, Custom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Mobile-Responsive & Performance Optimized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>SEO Foundation & Technical Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Ongoing Maintenance & Support</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 04: Strategic Consulting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 04
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                STRATEGIC<br />
                CONSULTING
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                STUCK? NOT SURE WHERE TO START? WE PROVIDE HIGH-LEVEL STRATEGIC GUIDANCE
                TO HELP YOU CLARIFY YOUR MESSAGE, POSITION YOUR BRAND, AND BUILD A
                ROADMAP FOR GROWTH.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Brand Positioning & Messaging Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Market Research & Competitive Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Marketing Strategy & Campaign Planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Go-to-Market Strategy for New Products/Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Growth Workshops & Brand Audits</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>

            {/* Right - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Service 05: Ads Specialization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>

            {/* Right - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 05
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                ADS SPECIALIZATION
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                WE DON'T JUST RUN ADS — WE ENGINEER CAMPAIGNS THAT TURN CLICKS INTO
                CUSTOMERS AND BUDGETS INTO ROI. DATA-DRIVEN, CREATIVE, AND LASER-FOCUSED
                ON RESULTS.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Google Ads (Search, Display, Shopping)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Meta Ads (Facebook & Instagram)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>TikTok & YouTube Advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Retargeting & Lookalike Audience Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>A/B Testing & Conversion Optimization</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 06: Brand Positioning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="text-sm font-bold text-[#0A2E5C] mb-2">
                ⚡ SERVICE 06
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2E5C] mb-6">
                BRAND POSITIONING
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                STRONG BRANDS DON'T JUST LOOK GOOD — THEY STAND FOR SOMETHING. WE HELP
                YOU DEFINE WHO YOU ARE, WHAT YOU DO DIFFERENTLY, AND WHY PEOPLE SHOULD
                CARE.
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-[#0A2E5C] mb-4">
                  WHAT'S INCLUDED:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Brand Identity Development (Logo, Colors, Typography)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Brand Voice & Messaging Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Brand Guidelines & Style Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Visual Assets (Business Cards, Letterheads, Templates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Rebranding Strategy & Rollout Support</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                GET STARTED
              </Link>
            </div>

            {/* Right - Image placeholder */}
            <div className="bg-gray-300 aspect-[4/3] rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Not Sure Which Service Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#0A2E5C]">NOT SURE</span>
                <br />
                <span className="text-[#0A2E5C]">WHICH SERVICE</span>
                <br />
                <span className="text-[#0A2E5C]">FITS </span>
                <span className="text-[#D4AF37]">YOUR</span>
                <br />
                <span className="text-[#D4AF37]">NEEDS?</span>
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No worries! Let's figure it out together. Answer a few quick questions,
                and we'll match you with the perfect service to get your brand where it
                needs to be.
              </p>

              {/* Decision Tree Questions */}
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    🎯 What's your main goal?
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Increase brand awareness → Digital Marketing</li>
                    <li>• Drive more sales → Ads Specialization</li>
                    <li>• Build a new brand → Brand Positioning</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    💡 Do you have a website?
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• No → Website Creation</li>
                    <li>• Yes, but it needs work → Website Creation</li>
                    <li>• Yes, and it's good → Digital Marketing</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    📊 Do you need strategy first?
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Yes, I'm starting from scratch → Strategic Consulting</li>
                    <li>• No, I know what I need → Pick specific service</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    🎨 Need visual content?
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Ads & graphics → Advertising & Info-graphic Design</li>
                    <li>• Full brand identity → Brand Positioning</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0A2E5C] mb-2">
                    📧 Still not sure?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Book a free consultation, and we'll help you figure it out.
                  </p>
                </div>
              </div>

              <Link
                href="/consultation"
                className="inline-block bg-[#0A2E5C] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                BOOK A FREE CONSULTATION
              </Link>
            </div>

            {/* Right - Team Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/atlas-team-3.png"
                  alt="Atlas Africa Team Discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600">
              Fill out the form below, and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>

            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            >
              <option value="">Select Service *</option>
              <option value="digital-marketing">Digital Marketing & Social Media</option>
              <option value="advertising">Advertising & Info-graphic Design</option>
              <option value="website">Website Creation</option>
              <option value="consulting">Strategic Consulting</option>
              <option value="ads">Ads Specialization</option>
              <option value="branding">Brand Positioning</option>
              <option value="not-sure">Not Sure / Need Consultation</option>
            </select>

            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            >
              <option value="">Budget Range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>

            <textarea
              placeholder="Tell us about your project... *"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0A2E5C] text-white py-4 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
