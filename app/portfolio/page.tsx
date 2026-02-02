import React from "react";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7h18" />
              <path d="M3 12h18" />
              <path d="M3 17h18" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-3">
          Portfolio Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
          We’re currently refining this space to showcase our best work.
          Please check back shortly.
        </p>

        {/* Shimmer Divider */}
        <div className="relative mx-auto h-px w-32 overflow-hidden bg-gray-800">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer" />
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
