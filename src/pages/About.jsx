import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaUsers, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-0">
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
          <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#24aae1]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#146fad]/10 rounded-full blur-3xl" />

          {/* Animated Icons */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 text-6xl text-[#24aae1]/20"
          >
            <FaHandshake />
          </motion.div>
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 text-6xl text-[#146fad]/20"
          >
            <FaUsers />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
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
            </motion.div>

            {/* Right Column - Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {[
                { number: "2014", text: "Gegründet" },
                { number: "50+", text: "Mitarbeiter" },
                { number: "100%", text: "Kundenzufriedenheit" },
                { number: "3", text: "Geschäftsbereiche" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#06234B]/10 text-center flex flex-col justify-center items-center min-h-[100px] sm:min-h-[120px]"
                >
                  <div className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="text-gray-400 mb-2 text-sm">Mehr entdecken</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Company Info Section */}
      <div className="relative pv-10 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
          <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
        </motion.div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white/80 backdrop-blur-lg p-6 md:p-12 rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-8">
                    Über Uns
                  </h2>
                  <p className="text-sm md:text-base text-black/70 mb-8 leading-relaxed">
                    Mit einem erweiterten Team und gebündeltem Know-how sind wir
                    heute Ihr zuverlässiger Partner für maßgeschneiderte
                    Lösungen im Bau- und Industrieservice
                  </p>
                  <p className="text-sm md:text-base text-black/70 mb-8 leading-relaxed">
                    Unser Versprechen: Qualität und Transparenz Ganz gleich, für
                    welche unserer Leistungen Sie sich entscheiden – bei uns
                    können Sie jederzeit auf eine qualitätsorientierte
                    Arbeitsweise und ein faires Preis-Leistungs-Verhältnis
                    vertrauen
                  </p>
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">
                    Wir setzen auf Professionalität, Zuverlässigkeit und
                    persönliche Beratung. Überzeugen Sie sich selbst und
                    vereinbaren Sie ein Gespräch mit uns – wir freuen uns auf
                    Ihre Anfrage!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="h-full rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="/hero/bg1.jpg"
                  alt="Bauarbeiten"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="relative pt-8 md:pt-40 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
          <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
        </motion.div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Section */}
          <div className=" md:mb-20">
            {/* Section Title */}
            <div className="text-center mb-8 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent"
              >
                Ihre Ansprechpartner
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
              >
                Unser erfahrenes Team steht Ihnen jederzeit zur Verfügung
              </motion.p>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                >
                  {/* Card Container */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden h-full flex flex-col border border-gray-100">
                    {/* Top Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#24aae1] to-[#146fad]" />

                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.03]" />

                    {/* Profile Image Section */}
                    <div className="relative h-48 sm:h-72 overflow-hidden flex-shrink-0">
                      <img
                        src={`/persons/person-${index + 1}.jpg`}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                        <motion.a
                          href={`tel:${member.phone1}`}
                          className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                            <FaPhone className="text-[#24aae1] text-sm sm:text-lg" />
                          </div>
                          <span className="text-xs sm:text-base text-gray-600 font-medium">
                            {member.phone1}
                          </span>
                        </motion.a>
                        {member.phone2 && (
                          <motion.a
                            href={`tel:${member.phone2}`}
                            className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                              <FaPhone className="text-[#24aae1] text-sm sm:text-lg" />
                            </div>
                            <span className="text-xs sm:text-base text-gray-600 font-medium">
                              {member.phone2}
                            </span>
                          </motion.a>
                        )}
                        <motion.a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#24aae1]/5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(6,35,75,0.05)] hover:shadow-[0_4px_12px_-2px_rgba(6,35,75,0.08)]"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#24aae1]/10 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                            <FaEnvelope className="text-[#24aae1] text-sm sm:text-lg" />
                          </div>
                          <span className="text-xs sm:text-base text-gray-600 font-medium break-all">
                            {member.email}
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
