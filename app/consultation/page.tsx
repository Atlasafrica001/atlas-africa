"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

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
      <HeaderMain />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-100">
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
          <a 
            href="#consultation-form"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#C4A037] transition-colors mb-12"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Book a Free Consultation
          </a>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
              Everything you need to build, grow and make your brand actually matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Brand Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help you define your positioning, voice, and identity in a way that resonates.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Digital Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From paid ads to organic growth, we craft campaigns that actually convert.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create content that doesn't just post—it performs, engages, and converts.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Content Creation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Videos, graphics, copy—we make content that stops the scroll and starts conversations.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">SEO & SEM</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get found, get clicked, get results. We optimize for search engines and real people.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">6</span>
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
              From "Say What?" to awesome disruption, we're with you at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We dig deep to understand your brand, goals, and audience
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                We craft a custom plan tailored to your unique needs
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A2E5C] mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                We bring the strategy to life with killer creative and campaigns
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-lg mb-4">
                <span className="text-white text-xl font-bold">4</span>
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
              <div className="bg-[#0A2E5C] p-6 relative">
                <div className="absolute top-4 left-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.3">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Atlas Africa transformed our brand from invisible to unforgettable. Their creative 
                  campaigns didn't just increase engagement—they sparked a movement."
                </p>
              </div>
              <div className="bg-[#F5F1E8] p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#0A2E5C]">Sarah M.</div>
                  <div className="text-xs text-gray-600">CEO, TechStart</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#0A2E5C] p-6 relative">
                <div className="absolute top-4 left-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.3">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Working with Atlas Africa was a game-changer. Their team understood our vision 
                  and delivered results that exceeded every expectation."
                </p>
              </div>
              <div className="bg-[#F5F1E8] p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#0A2E5C]">David K.</div>
                  <div className="text-xs text-gray-600">Founder, GrowthLab</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-[#0A2E5C] p-6 relative">
                <div className="absolute top-4 left-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.3">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "The ROI speaks for itself. Atlas Africa's strategy increased our revenue by 300% 
                  in just six months. Absolute game-changers."
                </p>
              </div>
              <div className="bg-[#F5F1E8] p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-[#0A2E5C]">Amara N.</div>
                  <div className="text-xs text-gray-600">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
