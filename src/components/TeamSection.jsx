import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="relative pt-8 md:pt-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <div className="md:mb-20">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
              Ihre Ansprechpartner
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Unser erfahrenes Team steht Ihnen jederzeit zur Verfügung
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 sm:px-6 lg:px-8">
            {[
              {
                name: "Alexandru Constantinescu",
                position: "Geschäftsführung",
                phone1: "+49 (0)7253 9583-790",
                phone2: "+49 (0)176 3216 7874",
                email: "alexandru.constantinescu@turom-gmbh.de",
              },
              {
                name: "Mehmet Gök",
                position: "Geschäftsführung",
                phone1: "+49 (0)7253 9583-791",
                phone2: "+49 (0)172 9264 414",
                email: "mehmet.goek@turom-gmbh.de",
              },
              {
                name: "Aureliana Voda",
                position: "Verwaltung",
                phone1: "+49 (0)7253 9583-791",
                email: "aureliana.voda@turom-gmbh.de",
              },
            ].map((member, index) => (
              <div key={index} className="group relative h-full">
                {/* Card Container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden h-full flex flex-col border border-gray-100">
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#24aae1] to-[#146fad]" />

                  {/* Profile Image Section */}
                  <div className="relative h-48 sm:h-72 overflow-hidden flex-shrink-0">
                    <img
                      src={`/persons/person-${index + 1}.webp`}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-4 sm:p-8 flex-grow flex flex-col bg-white/50 backdrop-blur-sm">
                    {/* Name and Position */}
                    <div className="text-center mb-4 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#24aae1] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base inline-block px-3 sm:px-4 py-1 rounded-full bg-[#24aae1]/10 text-[#24aae1] font-medium">
                        {member.position}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 sm:space-y-3 mt-auto">
                      <a
                        href={`tel:${member.phone1}`}
                        className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                      >
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                          <FaPhone className="text-[#24aae1] text-sm sm:text-lg" />
                        </div>
                        <span className="text-xs sm:text-base text-gray-600 font-medium">
                          {member.phone1}
                        </span>
                      </a>
                      {member.phone2 && (
                        <a
                          href={`tel:${member.phone2}`}
                          className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                        >
                          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                            <FaPhone className="text-[#24aae1] text-sm sm:text-lg" />
                          </div>
                          <span className="text-xs sm:text-base text-gray-600 font-medium">
                            {member.phone2}
                          </span>
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                      >
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                          <FaEnvelope className="text-[#24aae1] text-sm sm:text-lg" />
                        </div>
                        <span className="text-xs sm:text-base text-gray-600 font-medium break-all">
                          {member.email}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
