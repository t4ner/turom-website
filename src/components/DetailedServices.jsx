import React from "react";
import { serviceCategories } from "../data.js";

const DetailedServices = () => {
  return (
    <div className="container mx-auto md:pb-20 px-4">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-16 md:mb-32 relative">
        <span className="bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
          Unsere Fachgebiete im Detail
        </span>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-[#24aae1] to-[#146fad] rounded-full" />
      </h1>

      <div className="space-y-12 md:space-y-28">
        {serviceCategories.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative order-1 md:order-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#24aae1]/10 to-[#146fad]/10 rounded-3xl transform -rotate-4" />
              <div
                className="w-full h-full overflow-hidden rounded-3xl 
                shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] 
                relative z-10 transform rotate-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 order-2 md:order-none">
              <div
                className="bg-white/90 backdrop-blur-sm p-6 md:p-16 rounded-3xl 
                shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] 
                hover:shadow-[0_8px_30px_-10px_rgba(6,35,75,0.2)] 
                border border-gray-100
                transition-all duration-500 
                min-h-[400px] md:h-[600px] 
                flex flex-col justify-center
                relative z-10"
              >
                <div className="relative mb-6 md:mb-8 flex">
                  <span className="text-6xl md:text-8xl font-bold text-black/5 absolute -top-8 -left-4 md:-top-10 md:-left-6">
                    {service.id}
                  </span>
                  <h2 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent relative">
                    {service.title}
                  </h2>
                </div>
                <div>
                  <ul className="space-y-4 md:space-y-5">
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 md:space-x-4 text-black/70 group"
                      >
                        <span className="text-[#24aae1] text-2xl md:text-3xl leading-none">
                          ›
                        </span>
                        <span className="text-sm md:text-base group-hover:text-[#24aae1] group-hover:translate-x-2 transition-all duration-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedServices;
