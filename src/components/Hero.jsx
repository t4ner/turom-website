import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../data.js";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    if (activeIndex < 2) {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }
  };

  useEffect(() => {
    let interval;
    if (activeIndex < 2) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-8"
            >
              {/* Slide Number */}
              <motion.div
                className="flex items-center gap-2 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white/60 text-xs sm:text-sm tracking-[0.5em] font-light">
                  {`${String(activeIndex + 1).padStart(2, "0")}`}
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-12 sm:w-24 h-[1px] bg-white/30 origin-left"
                />
              </motion.div>

              {/* Title & Subtitle */}
              <div className="space-y-3 sm:space-y-6">
                <motion.h1
                  className="text-4xl sm:text-6xl md:text-[90px] font-bold text-white leading-none tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slides[activeIndex].title}
                </motion.h1>
                <motion.p
                  className="text-base sm:text-xl text-white/70 font-light max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[activeIndex].subtitle}
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 sm:pt-8"
              ></motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-24 sm:bottom-12 left-4 flex flex-col space-y-4 sm:space-y-6">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group flex items-center gap-2 sm:gap-4"
              whileHover={{ x: 10 }}
            >
              <motion.div
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
            </motion.button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <span className="text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">
              Scroll
            </span>
            <div className="relative w-[1px] h-16 sm:h-24">
              <motion.div
                className="absolute top-0 left-0 w-full bg-white"
                animate={{
                  height: ["0%", "100%"],
                  y: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
