import React from "react";
import { cards } from "../data.js";

const Information = () => {
  return (
    <div className="relative pb-10 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-24">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-gray-900">
            Willkommen bei der <br />
            <span className="">TuRom GmbH</span>
          </h2>
          <p className="md:text-xl text-gray-600 font-light px-4 sm:px-0">
            Ihr Experte für Bau- & Industrieservice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative px-4 sm:px-0">
          {cards.map((card, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#24aae1] to-[#146fad] rounded-[20px] opacity-0 group-hover:opacity-20" />

              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-[18px] p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100/50">
                {/* Number */}
                <div className="absolute -top-6 sm:-top-8 left-6 sm:left-8">
                  <span className="text-6xl sm:text-8xl font-bold text-gray-100/80">
                    {card.number}
                  </span>
                </div>

                {/* Content Container */}
                <div className="relative z-10">
                  <div className="w-16 sm:w-20 h-0.5 mb-6 sm:mb-8 bg-gradient-to-r from-[#24aae1] to-[#146fad] hover:w-[120px] transition-all duration-300" />

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 hover:text-[#24aae1] transition-colors duration-200">
                    {card.title}
                  </h3>

                  <p className="text-sm md:text-base sm:text-lg text-gray-600 leading-relaxed">
                    {card.content}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-tr-[18px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
