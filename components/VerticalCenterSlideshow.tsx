import Image from "next/image";

const images = [
    "/atlas-boys-1.png",
    "/atlas-girls-1.png",
    "/atlas-team-3.png",
    "/atlas-team-4.png",
    "/atlas-team-5.jpg",
  ];

export default function VerticalCenterSlideshow() {
  return (
    <div className="relative w-full max-w-sm h-[520px] overflow-hidden flex items-center justify-center">
      {/* Slideshow Track */}
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col animate-vertical-center-slide">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[520px] flex-shrink-0 bg-[#D4AF37] rounded-xl shadow-2xl overflow-hidden mb-8"
          >
            {/* Folder Lip */}
            <div className="absolute top-0 left-0 w-3/4 h-16 bg-[#C4A037] z-10 rounded-br-xl" />

            {/* Image */}
            <Image
              src={src}
              alt="Atlas Africa Team"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
