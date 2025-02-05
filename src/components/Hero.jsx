import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { slides } from "../data.js";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for GSAP animations
  const contentRef = useRef(null);
  const slideNumberRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    if (activeIndex < 2) {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }
  };

  // Slide change animation
  useEffect(() => {
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    timeline
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        slideNumberRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, transformOrigin: "left" },
        "-=0.4"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

    return () => timeline.kill();
  }, [activeIndex]);

  // Auto slide interval
  useEffect(() => {
    let interval;
    if (activeIndex < 2) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Scroll indicator animation
  useEffect(() => {
    gsap.to(scrollIndicatorRef.current, {
      height: "100%",
      y: "100%",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <img
          src="/hero/bg1.webp"
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6">
        <div className="h-full flex flex-col justify-center items-start max-w-2xl">
          <div ref={contentRef} className="space-y-4 sm:space-y-8">
            {/* Slide Number */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span
                ref={slideNumberRef}
                className="text-white/60 text-xs sm:text-sm tracking-[0.5em] font-light"
              >
                {`${String(activeIndex + 1).padStart(2, "0")}`}
              </span>
              <div ref={lineRef} className="w-12 sm:w-24 h-[1px] bg-white/30" />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3 sm:space-y-6">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-6xl md:text-[90px] font-bold text-white leading-none tracking-tight"
              >
                {slides[activeIndex].title}
              </h1>
              <p
                ref={subtitleRef}
                className="text-base sm:text-xl text-white/70 font-light max-w-xl leading-relaxed"
              >
                {slides[activeIndex].subtitle}
              </p>
            </div>

            <div className="pt-4 sm:pt-8"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-24 sm:bottom-12 left-4 flex flex-col space-y-4 sm:space-y-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group flex items-center gap-2 sm:gap-4"
            >
              <div
                className={`w-8 sm:w-12 h-[1px] ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                } transition-all duration-300 group-hover:w-12 sm:group-hover:w-16`}
              />
              <span
                className={`text-xs sm:text-sm font-light tracking-wider ${
                  index === activeIndex ? "text-white" : "text-white/30"
                }`}
              >
                {`0${index + 1}`}
              </span>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 text-white/60">
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <span className="text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">
              Scroll
            </span>
            <div className="relative w-[1px] h-16 sm:h-24">
              <div
                ref={scrollIndicatorRef}
                className="absolute top-0 left-0 w-full bg-white h-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
