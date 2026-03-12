import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" py-12 relative overflow-hidden bg-white">
      {/* Background Pattern - very subtle on cream background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/footer-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      
      {/* Content - positioned above pattern */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex gap-4 mb-4 align-middle">
              <Image
                src="/offwhite-icon-logo.png"
                alt="Atlas Africa"
                width={150}
                height={50}
                className="h-16 w-auto bg-atlas-navy p-3 rounded-xl shadow-sm shadow-black"
              />
              <div className="italic mt-2">
                <h3 className="text-2xl font-bold"><span className="text-atlas-gold">ATLAS</span> <span className="text-atlas-navy">AFRICA</span></h3>
                <p className="text-xs text-atlas-navy ml-2">CREATING • MARKETING • MEDIA</p>
              </div>
            </div>
            <p className="text-sm text-atlas-navy italic font-nornal leading-relaxed mb-4">
              Your{" "}
              <span className="text-[#D4AF37] font-bold">
                creative partner
              </span>{" "}
              for visual storytelling that amplifies African brands on the{" "}
              <span className="font-bold">global stage</span>. From concept
              to creation, we bring your vision to life.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start md:items-end">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37] bg-opacity-45 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-black">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37] bg-opacity-45 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-black">+2348082343780</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37] bg-opacity-45 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 7l10 7 10-7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-black">info@atlasafrica.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-600 italic">
            © 2025 Atlas Africa {"  "}
            <span className="text-[#D4AF37]">Creative Excellence</span> |{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#D9D9D9] bg-opacity-50 stroke-[#D4AF37] flex items-center justify-center hover:bg-[#C4A037] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke="inherit"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#D9D9D9] bg-opacity-50 stroke-[#D4AF37] flex items-center justify-center hover:bg-[#C4A037] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke="inherit"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#D9D9D9] bg-opacity-50 stroke-[#D4AF37] flex items-center justify-center hover:bg-[#C4A037] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke="inherit"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="inherit"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#D9D9D9] bg-opacity-50 stroke-[#D4AF37] flex items-center justify-center hover:bg-[#C4A037] transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke="inherit"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#D9D9D9] bg-opacity-50 stroke-[#D4AF37] flex items-center justify-center hover:bg-[#C4A037] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke="inherit"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
