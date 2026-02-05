"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/atlas-boys-1.png",
  "/atlas-girls-1.png",
  "/atlas-team-3.png",
  "/atlas-team-4.png",
  "/atlas-team-5.jpg",
];


export default function VerticalCenterSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // not too fast, not too slow

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
      {/* Slide Track */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[360px] md:h-[520px] flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Team ${i + 1}`}
              fill
              className="object-cover rounded-xl"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Center mask for focus */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
}




