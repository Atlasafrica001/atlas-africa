"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <HeaderMain />

      {/* Hero Section - No card, just content on textured background */}
      <section 
        className="pt-32 pb-16"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          {/* Category Tags */}
          <div className="flex gap-3 mb-8 flex-wrap justify-center">
            <span className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium">
              Strategy & Innovation
            </span>
          </div>

          {/* Featured Article - Direct on background, NO card wrapper */}
          <div className="mb-6">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold font black mb-5 text-center">Why Traditional Marketing is <span className="text-atlas-gold">Dead</span> and How Disruptive Thinking Wins</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 leading-tight text-center">
              The rules have changed. Learn how the world's most innovative
              brands are breaking the mold and creating movements, not just
              campaigns.
            </h2>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              <Image
                src="/blog-author-1.png"
                alt="Miss Erin"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-900">Miss Erin</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">Jan 6, 2025</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section - White Background */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Article Body Paragraph */}
          <p className="text-gray-800 leading-relaxed mb-10 text-lg">
            It's a war of <span className="font-bold">ATTENTION</span> out there and brands with only "HUGS EVERY MARKETER" 
            slogans are losing badly. Meanwhile, the disruptors are winning today and I just 
            think we should be listening to success a little bit differently. I'm marketing and I'm 
            thinking about it only way to about it not because to get some.
          </p>

          {/* Black Video/Image Placeholder */}
          <div className="bg-black rounded-2xl aspect-video mb-12"></div>

          {/* Quote Section */}
          <blockquote className="border-l-4 border-[#D4AF37] pl-8 py-4 my-12">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              "The biggest risk is not taking any risk. In a world that's changing quickly, the 
              only strategy that is guaranteed to fail is not taking risks."
            </p>
            <footer className="text-gray-600 font-medium">— Mark Zuckerberg</footer>
          </blockquote>
        </div>
      </section>

      {/* Article List Section - Cream Background */}
      <section className="py-12 bg-[#F5F1E8]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Article Card 1 */}
          <article className="mb-10 pb-10 border-b border-gray-300">
            <div className="flex items-start gap-4">
              <Image
                src="/blog-author-2.png"
                alt="Miss Erin"
                width={48}
                height={48}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-gray-900">Miss Erin</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">12 December 2024</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  What Is Unconventional Marketing
                </h2>
                <div className="mb-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    That's what marketing is now on steroids—unconventional breaking in your favorite 
                    and probably disturbing big brands. Except you can dismantle what experience. Real 
                    talk—nobody cares what you're trying to sell. It's all about what you're actually 
                    creating. We disrupt our way through conventional slay by trying out anything that 
                    resonates, taking it in with both disruptive with conventional.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In a simple world where ads get enough and ghost you quicker. Skipped content enough 
                    having, you don't. Today, that approach doesn't just fall flat—it actually damages your 
                    brand. Consumers don't want to be marketed at—they want to be engaged.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>100</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Comment</span>
                  </button>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
          </article>

          {/* Article Card 2 */}
          <article className="mb-10 pb-10 border-b border-gray-300">
            <div className="flex items-start gap-4">
              <Image
                src="/blog-author-2.png"
                alt="Miss Erin"
                width={48}
                height={48}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-gray-900">Miss Erin</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">July 16</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  What Disruptive Marketing Actually Means
                </h2>
                <div className="mb-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Disruption isn't about being different for the sake of being different. It's about 
                    understanding cultural moments, leveraging emerging platforms before they're 
                    saturated, and building authentic stories that resonate. It's about standing where your 
                    advocate could be telling you around.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Think about the brands you actually remember from the past year. Did they buy 30 
                    billboards, or did they do something that made you feel something, think something, 
                    share something, or start a share with your friends?
                  </p>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>100</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Comment</span>
                  </button>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles Section - Textured Background */}
      <section 
        className="py-12"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The Path Forward: 5 Principles of Disruptive Marketing
            </h2>
          </div>

          {/* Article Cards List with External Link Icons */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <article
                key={item}
                className="bg-gray-200/80 rounded-xl p-5 hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <Image
                      src="/blog-author-1.png"
                      alt="Miss Erin"
                      width={48}
                      height={48}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-gray-900">Miss Erin</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">Jan 6, 2025</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        The Death of Conventional Marketing
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          Jan 6, 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          5 min read
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* External Link Icon - Top Right */}
                  <button className="p-2 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Filler Section - Textured Background */}
      <section 
        className="py-12"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#F5F1E8]/90 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Bottom Filler
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Disruption isn't about, being different for the sake of being different. It's 
              about understanding cultural moments, leveraging emerging platforms before they're 
              saturated, and building authentic stories that resonate. It's about standing where your 
              advocate could be telling you around. Think about the brands you actually remember 
              from the past year. Did they buy 30 billboards, or did they do something that made your 
              people mad love your on mistakes without losing power.
            </p>
            <button className="bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#0A2E5C]">Ready to </span>
            <span className="text-[#D4AF37]">Disrupt</span>
            <span className="text-[#0A2E5C]"> Your Industry?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let 30,000+ marketers getting weekly insights, tips, and ideas into the creativity, 
            disruption we're setting, disruptive marketing.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
