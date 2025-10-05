"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface PartnerLogo {
  id: number;
  logo: string;
  alt: string;
}

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners: PartnerLogo[] = [
    { id: 1, logo: "/images/partners/havells.webp", alt: "Havells Logo" },
    { id: 2, logo: "/images/partners/polycab-logo.png", alt: "Polycab Logo" },
    { id: 3, logo: "/images/partners/Syska-logo.png", alt: "Syska Logo" },
    { id: 4, logo: "/images/partners/finolex-vector.png", alt: "Finloex Logo" },
    { id: 5, logo: "/images/partners/V-Guard.png", alt: "V-Guard Logo" },
    {
      id: 6,
      logo: "/images/partners/RR cable 2.png",
      alt: "RR Cable logo",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.7; // Adjust for motion speed

    const scrollStep = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // reset loop
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      scrollAmount = requestAnimationFrame(scrollStep);
    };

    scrollAmount = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(scrollAmount);
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-dark overflow-hidden">
      {/* Left gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-dark via-dark/60 to-transparent z-10" />

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-dark via-dark/60 to-transparent z-10" />

      <div className="container max-w-7xl mx-auto px-5 2xl:px-0 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Collaborating with industry pioneers to accelerate sustainable
            innovation and growth
          </p>
        </div>

        {/* Infinite Scroll Logos */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-10 md:space-x-16"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 md:w-48 bg-white/10 rounded-xl shadow-sm border border-white/10 backdrop-blur-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={100}
                height={100}
                className="object-contain max-h-12 md:max-h-14 opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
