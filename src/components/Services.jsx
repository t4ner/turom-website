import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { services } from "../data.js";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Desktop hover efektleri
    if (window.innerWidth >= 768) {
      cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
          setActiveCard(index);
          gsap.to(cards, {
            width: "20%",
            duration: 0.5,
            ease: "power2.inOut",
          });
          gsap.to(card, {
            width: "60%",
            duration: 0.5,
            ease: "power2.inOut",
          });
        });
      });

      const container = document.querySelector(".services-container");
      container.addEventListener("mouseleave", () => {
        setActiveCard(null);
        gsap.to(cards, {
          width: "33.333%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    }
  }, []);

  return (
    <section className="py-16 md:py-36">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-20 relative">
          <span className="bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
            Unsere Leistungen im Überblick
          </span>
          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-2 bg-gradient-to-r from-[#24aae1] to-[#146fad] rounded-full" />
        </h1>

        {/* Mobil Görünüm */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl font-bold text-white opacity-90 shadow-text">
                    {service.number}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Görünüm */}
        <div className="hidden md:flex services-container h-[600px] gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card relative h-full transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-xl"
              style={{ width: "33.333%" }}
            >
              <div className="absolute inset-0">
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div>
                  <span className="text-6xl md:text-7xl font-bold opacity-20">
                    {service.number}
                  </span>
                  <h2 className="text-2xl font-bold mt-4 leading-tight">
                    {service.title}
                  </h2>
                </div>

                <div
                  className={`transition-all duration-300 transform ${
                    activeCard === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-lg  text-white/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
