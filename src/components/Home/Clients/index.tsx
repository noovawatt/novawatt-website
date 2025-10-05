"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const clientLogos: ClientLogo[] = [
    {
      id: 1,
      name: "Sun Builder",
      logo: "/images/clients/sun-builders-logo.png",
      alt: "Sun Builder Logo",
    },
    {
      id: 2,
      name: "Ratna Builder",
      logo: "/images/clients/Ratna Builders.png",
      alt: "Ratna Builder Logo",
    },
    {
      id: 3,
      name: "Art Nirman",
      logo: "/images/clients/Art Nirman logo.png",
      alt: "Art Nirman Logo",
    },
    {
      id: 4,
      name: "Sheetal Group",
      logo: "/images/clients/shivalay-group-logo.svg",
      alt: "Sheetal Group Logo",
    },
  ];

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const duplicatedLogos = [...clientLogos, ...clientLogos];
  const slidesToShow = isMobile ? 1 : 4;
  const maxIndex = clientLogos.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? maxIndex - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isHovered && !isMobile) {
      intervalRef.current = setInterval(nextSlide, 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, isMobile]);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-5 2xl:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              Our Clients
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Trusted by Leading Developers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We partner with India&apos;s most respected real estate developers
            to deliver sustainable energy solutions
          </p>
        </div>

        {/* Logo Slider */}
        <div
          className="relative overflow-hidden px-2 sm:px-4"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="relative bg-white dark:bg-dark rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 group">
                  <div className="flex items-center justify-center h-32 sm:h-36 md:h-40">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.alt}
                        width={140}
                        height={80}
                        className="max-w-[100px] sm:max-w-[120px] md:max-w-[140px] max-h-[50px] sm:max-h-[60px] md:max-h-[70px] object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Optional: Uncomment to show client names */}
                  {/* <div className="mt-3 sm:mt-4 text-center border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {client.name}
                    </h3>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {clientLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-blue-600 dark:bg-blue-400"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile hint */}
        <div className="block md:hidden mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Swipe to explore more partners
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
