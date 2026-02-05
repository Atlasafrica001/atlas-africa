"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ConsultationPage() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-gray-200 z-10">
        <div className="absolute inset-0">
          <Image
            src="/textured-pattern.jpg"
            alt="African Theme Pattern"
            fill
            className="object-cover object-center opacity-35 -z-10"
            priority
            quality={90}
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#0A2E5C]">LET'S </span>
            <span className="text-[#D4AF37]">DISRUPT</span>
            <br />
            <span className="text-[#0A2E5C]">YOUR MARKET</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            We don't do ordinary. Book a free consultation and discover how our 360° approach can transform your brand into a market leader.
          </p>
          <Link
            href="#consultation-form"
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

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A2E5C] mb-1">300%</div>
              <div className="text-sm text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A2E5C] mb-1">150+</div>
              <div className="text-sm text-gray-600">Brands Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A2E5C] mb-1">50M+</div>
              <div className="text-sm text-gray-600">People Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-3">
              360° Services,<br />One Mission
            </h2>
            <p className="text-gray-600">
              Everything you need to build, grow and scale your brand under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Brand Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help you define your positioning, voice, and identity in a way that resonates.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Digital Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From paid ads to organic growth, we craft campaigns that actually convert.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create content that doesn't just post—it performs, engages, and converts.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4 rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Content Creation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Videos, graphics, copy—we make content that stops the scroll and starts conversations.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">SEO & SEM</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get found, get clicked, get results. We optimize for search engines and real people.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-45 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beautiful, fast, and functional websites that turn visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-3">
              Our Proven Process
            </h2>
            <p className="text-gray-600">
              From <span className="font-bold">first call</span> to <span className="font-bold">market domination</span>, we're with you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path></svg>
              </div>
              <div>
                <p className="font-bold text-atlas-gold bg-atlas-gold bg-opacity-30 inline-flex px-2 pb-1 my-3 rounded-lg">Step 1</p>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We dig deep into your brand, market, goals, and audience
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path></svg>
              </div>
              <div>
                <p className="font-bold text-atlas-gold bg-atlas-gold bg-opacity-30 inline-flex px-2 pb-1 my-3 rounded-lg">Step 2</p>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                We craft a custom plan tailored to your unique needs
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg>
              </div>
              <div>
                <p className="font-bold text-atlas-gold bg-atlas-gold bg-opacity-30 inline-flex px-2 pb-1 my-3 rounded-lg">Step 3</p>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                We bring the strategy to life with killer creative and campaigns
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>
              </div>
              <div>
                <p className="font-bold text-atlas-gold bg-atlas-gold bg-opacity-30 inline-flex px-2 pb-1 my-3 rounded-lg">Step 4</p>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                We measure, refine, and scale what works for maximum impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Free Consultation Form */}
      <section id="consultation-form" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-3">
              BOOK YOUR FREE<br />CONSULTATION
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-4">
              Don't Take Our Word<br />For It
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#0A2E5C] p-6 relative flex rounded-b-2xl -mb-2.5">
                <div className="absolute top-2 left-3 rotate-180">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="1">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4 ml-20">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-[#F5F1E8] p-4 rounded-b-3xl flex flex-col gap-3">
                <p className="text-black text-sm leading-relaxed text-center">
                  "Atlas Africa transformed our brand from invisible to unforgettable. Their creative 
                  campaigns didn't just increase engagement—they sparked a movement."
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-sm text-[#0A2E5C]">Sarah M.</div>
                    <div className="text-xs text-gray-600">CEO, TechStart</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#0A2E5C] p-6 relative flex rounded-b-2xl -mb-2.5">
                <div className="absolute top-2 left-3 rotate-180">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="1">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4 ml-20">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-[#F5F1E8] p-4 rounded-b-3xl flex flex-col gap-3">
                <p className="text-black text-sm leading-relaxed text-center">
                  "Working with Atlas Africa was a game-changer. Their team understood our vision 
                  and delivered results that exceeded every expectation."
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-sm text-[#0A2E5C]">David K.</div>
                    <div className="text-xs text-gray-600">Founder, GrowthLab</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#0A2E5C] p-6 relative flex rounded-b-2xl -mb-2.5">
                <div className="absolute top-2 left-3 rotate-180">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="1">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4 ml-20">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-[#F5F1E8] p-4 rounded-b-3xl flex flex-col gap-3">
                <p className="text-black text-sm leading-relaxed text-center">
                "This agency transformed our entire go-to-market strategy. In 6 months, we went from unknown to industry leader. Their 360° approach is the real deal."
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-sm text-[#0A2E5C]">Amara N.</div>
                    <div className="text-xs text-gray-600">Marketing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
