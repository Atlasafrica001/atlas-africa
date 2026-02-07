"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";

export default function AboutPage() {
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
    <div className="min-h-screen">
      <HeaderMain />

      {/* Section 1: Hero - WE DON'T FOLLOW RULES */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 text-xl md:text-2xl font-medium text-black mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" stroke="#000000" strokeWidth={2} fill="#none" viewBox="0 0 256 256"><path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path></svg>
                DISRUPTIVE BY DESIGN
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-[1.1]">
                <span className="text-[#0A2E5C]">WE DON'T<br />FOLLOW</span><br />
                <span className="text-[#D4AF37]">RULES</span>
              </h1>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                We're Not Your Average Marketing Agency. We Break Conventions, Shatter Expectations, And Create Campaigns That People Actually Remember.
              </p>

              <Link
                href="/consultation"
                className="inline-flex items-center gap-5 bg-white text-black border border-black px-10 md:px-12 py-4 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
              >
                Discover Our Story
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Right Images Grid */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-full -mr-0 lg:-mr-36">

              {/* Team Girls */}
              <Image
                src="/atlas-girls-1.png"
                alt="Team Girls"
                width={300}
                height={300}
                className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover absolute bottom-6 left-10 lg:bottom-10 lg:left-20 rounded-2xl z-20"
              />

              {/* Camera (Anchor) */}
              <Image
                src="/camera-on-tripod.png"
                alt="Camera"
                width={600}
                height={600}
                className="
                  w-[18rem] h-[18rem]
                  sm:w-[26rem] sm:h-[26rem]
                  lg:w-[36rem] lg:h-[36rem]
                  object-contain absolute
                  right-0 sm:-right-10 lg:-right-20
                  top-0 sm:-top-8 lg:-top-16
                "
              />

              {/* Team Circle */}
              <Image
                src="/atlas-team-4.png"
                alt="Team Circle"
                width={300}
                height={300}
                className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover absolute right-6 sm:right-12 lg:right-20 top-24 lg:top-32 rounded-2xl z-30"
              />

              {/* Team Boys */}
              <Image
                src="/atlas-boys-1.png"
                alt="Team Boys"
                width={300}
                height={300}
                className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover absolute top-0 sm:-top-4 lg:-top-8 right-28 sm:right-44 lg:right-60 rounded-2xl z-10"
              />

            </div>
          </div>
        </div>
      </section>


      {/* Section 2: Think Different */}
      <section className="relative overflow-hidden py-20 bg-atlas-gold bg-opacity-35 z-10">
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
                💡 OUR PHILOSOPHY
              </div> */}
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-[#0A2E5C]">THINK </span>
                <span className="text-[#D4AF37]">DIFFERENT</span>
                <br />
                <span className="text-[#0A2E5C]">OR DON'T THINK<br />AT ALL</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                In a world of carbon-copy agencies, we chose chaos. Beautiful, strategic, effective chaos.
                Every brand has a story worth disrupting the market for. We find that story, amplify it, and make sure it's impossible to ignore.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden p-8">
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
              <span className="text-[#D4AF37]">core </span>
              <span className="text-[#0A2E5C]">values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These aren't just words on a wall. They're the DNA of everything we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto capitalize">
            {/* Value 1 - F */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors relative overflow-hidden z-10">
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
              <div className="flex flex-col items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path></svg>
                <div>
                  <h3 className="text-xl font-medium text-black mb-3">
                    Fearlessly Bold
                  </h3>
                  <p className="text-black leading-relaxed text-sm mt-6">
                    We're not just colleagues — we're co-conspirators in creative chaos, united by one mission: to make your brand unforgettable.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 - O */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors relative overflow-hidden z-10">
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
              <div className="flex flex-col items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path></svg>
                <div>
                  <h3 className="text-xl font-medium text-black mb-3">
                    Obsessively Strategic
                  </h3>
                  <p className="text-black leading-relaxed text-sm mt-6">
                    Creativity without strategy is just art. We deliver both, always backed by data.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 - R */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors relative overflow-hidden z-10">
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
              <div className="flex flex-col items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path></svg>
                <div>
                  <h3 className="text-xl font-medium text-black mb-3">
                    Relentlessly Curious
                  </h3>
                  <p className="text-black leading-relaxed text-sm mt-6">
                    We question everything. Why? Because that's how you discover what others miss.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 - U */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D4AF37] transition-colors relative overflow-hidden z-10">
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
              <div className="flex flex-col items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path></svg>
                <div>
                  <h3 className="text-xl font-medium text-black mb-3">
                    Unapologetically Different
                  </h3>
                  <p className="text-black leading-relaxed text-sm mt-6">
                    No templates. No cookie-cutters. Just unique solutions for unique brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Numbers Speak Volumes */}
      <section className="py-20 bg-atlas-navy bg-opacity-35 relative overflow-hidden z-10">
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#0A2E5C]">The numbers </span>
              <span className="text-[#D4AF37]">speak</span>
              <span className="text-[#0A2E5C]"> volumes</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 border-2 border-atlas-navy text-start relative overflow-hidden z-10">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path></svg>
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Average ROI Increase</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 border-2 border-atlas-navy text-start relative overflow-hidden z-10">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Brands Transformed</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 border-2 border-atlas-navy text-start relative overflow-hidden z-10">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg>
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-lg opacity-90">People Reached</div>
            </div>
            <div className="bg-[#5B7C99] text-white rounded-2xl p-8 border-2 border-atlas-navy text-start relative overflow-hidden z-10">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"></path></svg>
              <div className="text-5xl font-bold mb-2">97%</div>
              <div className="text-lg opacity-90">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Misfits */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="relative rounded-3xl overflow-hidden mb-8 shadow-md shadow-gray-500 min-h-[420px] md:min-h-[520px] lg:min-h-0">

            {/* Heading */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 lg:top-12 lg:left-14 z-30">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Meet the <br /> misfits
              </h2>
            </div>

            {/* Background Image */}
            <Image
              src="/atlas-team-5.jpg"
              alt="Atlas Team"
              width={1200}
              height={600}
              className="w-full h-full object-cover opacity-30"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Personnels Listing */}
            <div
              className="
                absolute
                bottom-36 md:bottom-48 lg:bottom-72
                left-6 md:left-10 lg:left-20
                right-6
                flex flex-wrap gap-4 md:gap-6 lg:gap-8
                text-xs md:text-sm
                z-30
              "
            >
              {[
                "Creative Directors",
                "Brand Strategists",
                "Data Analysts",
                "Content Creators",
              ].map((role) => (
                <span
                  key={role}
                  className="bg-transparent backdrop-blur-sm px-4 md:px-5 py-2 md:py-3 border border-black shadow-sm shadow-black rounded-xl font-medium text-black"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="
                absolute
                bottom-16 md:bottom-24 lg:bottom-40
                left-6 md:left-10 lg:left-20
                right-6
                max-w-4xl
                text-sm md:text-base lg:text-lg
                leading-relaxed
                text-black
                capitalize
              "
            >
              We're not just colleagues — we're co-conspirators in creative chaos,
              united by one mission: to make your brand unforgettable.
            </p>

          </div>

        </div>
      </section>


      {/* Section 6: Three Pillars - Creative Minds, Data Wizards, Growth Hackers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 capitalize">
            {/* Creative Minds */}
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4 tracking-wide">CREATIVE MINDS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Award-winning designers and art directors who see the world differently
              </p>
            </div>

            {/* Data Wizards */}
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-6 rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4 tracking-wide">DATA WIZARDS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Analytics experts who turn numbers into narratives and insights into action
              </p>
            </div>

            {/* Growth Hackers */}
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-4 tracking-wide">GROWTH HACKERS</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Marketing strategists obsessed with scaling brands to new heights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA with Megaphone */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-5 flex items-end">
            <Image
              src="/megaphone.png"
              alt="Megaphone"
              width={300}
              height={300}
              className="-mr-32"
            />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#0A2E5C]">Ready to </span> <br />
              <span className="text-[#D4AF37]">disrupt</span>
              <span className="text-[#0A2E5C]"> your industry?</span>
          </h2>
          </div>
          <p className="text-gray-700 text-lg mb-10 max-w-xl mx-auto leading-relaxed capitalize">
            Let's create something extraordinary together. Your brand deserves more than ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-7 sm:gap-20 justify-center">
            <Link
              href="/consultation"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#000000]
                border-2 border-black
                text-white
                px-8 py-4 sm:py-2
                rounded-lg
                font-semibold
                tracking-wide shadow shadow-black
                text-sm md:text-base
                transition-colors
                hover:bg-black/90 hover:text-atlas-gold
                fill-white hover:fill-atlas-gold
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
              Book a Consultation
            </Link>
            <Link
              href="mailto:atlasafrica.ng@gmail.com"
              className="bg-white text-[#000000] hover:text-atlas-gold px-20 py-4 fill-black hover:fill-atlas-gold shadow shadow-gray-300 rounded-lg font-semibold border-2 border-black hover:border-atlas-gold transition-colors inline-flex gap-2 items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
              Email us
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Contact Form */}
      <section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                  <h3 className="text-xl">📧 Contact & Support</h3>
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
                    <h3 className="text-xl">🤝 Partnership & Brand</h3>
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
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
