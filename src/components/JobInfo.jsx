import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cardsJob } from "../data.js";
const JobInfo = () => {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.05),transparent)]" />
        <div className="absolute inset-0 bg-grid-gray-100 opacity-10" />
      </motion.div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900">
            Ihre Vorteile bei <br />
            <span className="bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
              TuRom GmbH
            </span>
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative"
        >
          {cardsJob.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#24aae1] to-[#146fad] rounded-[20px] opacity-0"
                whileHover={{ opacity: 0.2, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />

              <div
                className="relative h-full bg-white/80 backdrop-blur-sm rounded-[18px] p-6 sm:p-8 lg:p-10
                            shadow-lg border border-gray-100/50"
              >
                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-6 sm:-top-8 left-6 sm:left-8"
                >
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100/80">
                    {card.number}
                  </span>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative z-10"
                >
                  <motion.div
                    className="w-16 sm:w-20 h-0.5 mb-6 sm:mb-8 bg-gradient-to-r from-[#24aae1] to-[#146fad]"
                    whileHover={{ width: "100%", maxWidth: "120px" }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.h3
                    className="text-lg sm:text-xl font-semibold md:font-bold mb-3 sm:mb-4 text-gray-900"
                    whileHover={{ color: "#24aae1" }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {card.content}
                  </p>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-50/50 to-transparent 
                            rounded-tr-[18px] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JobInfo;
