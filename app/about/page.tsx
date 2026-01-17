"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    to: "Regine",
    bcc: "Archives",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
    setFormData({
      to: "Regine",
      bcc: "Archives",
      company: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderMain />

      {/* Section 1: Hero - WE DON'T FOLLOW RULES */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
                ⚡ DISRUPTIVE BY DESIGN
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-[#0A2E5C]">WE DON'T<br />FOLLOW </span>
                <span className="text-[#D4AF37]">RULES</span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
                At Atlas Africa, we believe the old playbook is dead. Conventional rules won't get you 
                unconventional results. That's why we're here—to disrupt the norm, break the rules, 
                and build brands that actually move people to think, feel, and act differently.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                Start Your Journey
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/atlas-team-5.jpg"
                  alt="Team Standing"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                <Image
                  src="/camera-on-tripod.png"
                  alt="Camera"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/atlas-team-4.png"
                  alt="Team Circle"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/atlas-boys-1.png"
                  alt="Team Boys"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Think Different */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
                💡 OUR PHILOSOPHY
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-[#0A2E5C]">THINK </span>
                <span className="text-[#D4AF37]">DIFFERENT</span>
                <br />
                <span className="text-[#0A2E5C]">OR DON'T THINK<br />AT ALL</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                Our Work Matters. Every pixel we craft, every brand story we tell, 
                every campaign we launch—it all matters. Because brands don't just need 
                visibility, they need velocity. They need movements, not just moments. 
                And that's where we come in.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden bg-white p-8 shadow-lg">
              <Image
                src="/face-of-atlas.png"
                alt="Face of Atlas"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#0A2E5C]">Our </span>
              <span className="text-[#D4AF37]">core values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These aren't just words on a wall. They're our DNA of everything we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Value 1 - F */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                    Fearlessly Bold
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We don't shy away from big ideas, controversial campaigns, or bold creative risks. 
                    If it scares you a little, we're on the right track.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 - O */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">O</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                    Obsessively Strategic
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Creativity without strategy is just noise. We obsess over insights, data, and cultural 
                    moments to make ideas that don't just land—they stick.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 - R */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                    Relentlessly Curious
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We question everything. Why? Because the status quo is the enemy of innovation. 
                    Curiosity fuels our best work.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 - U */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A2E5C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">U</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-3">
                    Unapologetically Different
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We zig when the world zags. Our ideas, culture, and brands we build are 
                    refreshingly different.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Numbers Speak Volumes */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#0A2E5C]">The numbers </span>
              <span className="text-[#D4AF37]">speak</span>
              <span className="text-[#0A2E5C]"> volumes</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Projects<br />Delivered</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Happy<br />Clients</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">Impressions</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">97%</div>
              <div className="text-lg opacity-90">Client<br />Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Misfits */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#0A2E5C]">Meet the </span>
              <span className="text-[#D4AF37]">misfits</span>
            </h2>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-8">
            <Image
              src="/atlas-team-5.jpg"
              alt="Atlas Team"
              width={1200}
              height={600}
              className="w-full h-auto object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Team Member Name Tags */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800">
                Demilade - CEO
              </span>
              <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800">
                Sharon - Creative Director
              </span>
              <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800">
                Temitope - Content Lead
              </span>
              <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800">
                Bukunmi - Designer
              </span>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            We're the rule-breakers, question-askers, and culture-creators. We think differently 
            because thinking the same has never changed anything. If you're looking for a typical 
            agency, you're in the wrong place. But if you're ready to build something extraordinary—
            welcome home.
          </p>
        </div>
      </section>

      {/* Section 6: Three Pillars - Creative Minds, Data Wizards, Growth Hackers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Creative Minds */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-4 tracking-wide">CREATIVE MINDS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We see 'This is how we've always done it' as an invitation to do it completely differently. 
                Fresh eyes, big ideas.
              </p>
            </div>

            {/* Data Wizards */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M18 17V9M13 17V5M8 17v-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-4 tracking-wide">DATA WIZARDS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We back big ideas with real insights. No vanity metrics, no fluff—just data that 
                drives decisions and dollars.
              </p>
            </div>

            {/* Growth Hackers */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-4 tracking-wide">GROWTH HACKERS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Strategy isn't enough—it's execution. We're obsessed with ROI, turning big ideas 
                into real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA with Megaphone */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Image
              src="/megaphone.png"
              alt="Megaphone"
              width={140}
              height={140}
              className="mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#0A2E5C]">Ready to </span>
            <span className="text-[#D4AF37]">disrupt</span>
            <span className="text-[#0A2E5C]"> your industry?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create something disruptive, memorable, and impossible to ignore. 
            Your competitors won't see it coming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/90 transition-colors inline-block"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-[#0A2E5C] px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors inline-block"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Form (3 columns) */}
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-bold text-[#0A2E5C] mb-2">
                Start Your Journey
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and let's start building something extraordinary.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To: Regine
                    </label>
                    <input
                      type="text"
                      value={formData.to}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bcc: Archives
                    </label>
                    <input
                      type="text"
                      value={formData.bcc}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail Number
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject / Your Interest
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What are you interested in?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us what you need (and why you're awesome)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your vision..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A2E5C] text-white py-4 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Contact Info Cards (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#F5F1E8] rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#0A2E5C] mb-4">
                  📍 Lagos, Nigeria
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  123 Creative Avenue<br />
                  Victoria Island, Lagos<br />
                  Nigeria
                </p>
              </div>

              <div className="bg-[#F5F1E8] rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#0A2E5C] mb-4">
                  📧 Contact & Support
                </h4>
                <div className="text-gray-700 text-sm space-y-2">
                  <p><strong>Email:</strong> hello@atlasafrica.com</p>
                  <p><strong>Phone:</strong> +234 800 000 0000</p>
                  <p><strong>Support:</strong> support@atlasafrica.com</p>
                </div>
              </div>

              <div className="bg-[#F5F1E8] rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#0A2E5C] mb-4">
                  🤝 Partnerships & Brand
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Interested in partnering with us or featuring Atlas Africa?<br />
                  <strong>partnerships@atlasafrica.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
