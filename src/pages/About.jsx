import React from "react";
import { FaPhone, FaUsers, FaHandshake } from "react-icons/fa";
import TeamSection from "../components/TeamSection";
import CompanyInfo from "../components/CompanyInfo";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-0">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
          <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#24aae1]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#146fad]/10 rounded-full blur-3xl" />

          {/* Animated Icons */}
          <div className="absolute top-1/4 left-1/4 text-6xl text-[#24aae1]/20">
            <FaHandshake />
          </div>
          <div className="absolute bottom-1/4 right-1/4 text-6xl text-[#146fad]/20">
            <FaUsers />
          </div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-2xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                Flexibel & Qualitätsorientiert
                <span className="block bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
                  TuRom GmbH
                </span>
              </h1>
              <p className="text-sm md:text-base  text-gray-600 mb-6 sm:mb-8">
                Gemeinsam stärker – für Ihre Projekte Aus der Überzeugung, dass
                Zusammenarbeit mehr bewegt, entstand im Februar 2014 die TuRom
                GmbH. Die Gründer Mehmet Gök und Alexandru Constantinescu
                vereinten ihre beiden erfolgreichen Einzelunternehmen, um
                Synergien zu nutzen und ihren Kunden ein noch breiteres
                Leistungsspektrum, eine optimierte Logistik und mehr
                Flexibilität zu bieten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+49 (0)7253 9583-792"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#24aae1] text-[#24aae1] rounded-lg hover:bg-[#24aae1] hover:text-white transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold transform hover:-translate-y-1"
                >
                  <FaPhone className="mr-2" />
                  Kontaktieren Sie uns
                </a>
              </div>
            </div>

            {/* Right Column - Stats/Features */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "2014", text: "Gegründet" },
                { number: "50+", text: "Mitarbeiter" },
                { number: "100%", text: "Kundenzufriedenheit" },
                { number: "3", text: "Geschäftsbereiche" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#06234B]/10 text-center flex flex-col justify-center items-center min-h-[100px] sm:min-h-[120px] hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    {stat.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center ">
          <div className="text-gray-400 mb-2 text-sm">Mehr entdecken</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <CompanyInfo />

      {/* Company Story Section */}
      <TeamSection />
    </>
  );
};

export default About;
