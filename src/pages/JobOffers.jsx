import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import JobInfo from "../components/JobInfo";

const jobPositions = [
  {
    title: "Bauleiter/in Tiefbau (m/w/d)",

    tasks: [
      "Erstellen von Angeboten und Kostenschätzungen",
      "Planung und Steuerung von Baustellen unter Berücksichtigung technischer, terminlicher und wirtschaftlicher Vorgaben",
      "Koordination und Überwachung der Mitarbeiter vor Ort",
      "Ansprechpartner/in für Behörden, Bauherren, Planungsbüros und Lieferanten",
      "Durchführung von Bauablaufkontrollen und Teilnahme an Bau- und Koordinierungsbesprechungen",
      "Erstellung von Aufmaßen, Abrechnungen und Baustellendokumentationen",
    ],
    profile: [
      "Abgeschlossene Qualifikation als Techniker/in, Meister/in oder Bauingenieur/in",
      "Mindestens 3 Jahre Berufserfahrung im Tief- und Kabelbau",
      "Erste Erfahrungen in der Bauleitung oder Bauüberwachung",
      "Selbstständige und lösungsorientierte Arbeitsweise mit einem unternehmerischen Denken",
    ],
    requirements: [
      {
        title:
          "Abgeschlossene Ausbildung oder Studium in einem relevanten Bereich, z. B.:",
        subItems: [
          "Straßenbauermeister/in",
          "Techniker/in – Bautechnik (Tiefbau)",
          "Polier/in – Tiefbau",
          "Bauingenieurwesen",
        ],
      },
      "Fundierte Kenntnisse in Bauleitung und Bauplanung",
      "Führerschein Klasse B (zwingend erforderlich)",
      "Reise- und Montagebereitschaft",
      "Erfahrung in der Leitung von Teams und Projekten",
    ],
  },
  {
    title: "Vorarbeiter/in Tiefbau (m/w/d)",

    tasks: [
      "Ausführung und Organisation von Arbeiten innerhalb einer Tiefbaukolonne",
      "Anleitung und Führung kleiner Arbeitsgruppen",
      "Sicherstellung der korrekten Verwendung von Baustoffen und Betriebsmitteln",
      "Umsetzung von Bauplänen und Anweisungen vor Ort",
      "Erstellung von Aufmaßen und Skizzen zur Projektdokumentation",
    ],
    profile: [
      "Abgeschlossene Ausbildung als Tiefbaufacharbeiter/in oder langjährige Erfahrung im Tiefbau",
      "Teamorientiertes Arbeiten und kundenorientiertes Handeln",
      "Versierter Umgang mit Baumaschinen wie Radlader, Minibagger und Rüttelplatten",
      "Selbstständige und wirtschaftlich geprägte Arbeitsweise",
    ],
    requirements: [
      "Ausbildung als Tiefbaufacharbeiter/in oder Baugeräteführer/in",
      "Fundierte Kenntnisse im Umgang mit Baumaschinen",
      "Führerschein Klasse B (zwingend erforderlich)",
      "Reisebereitschaft und Flexibilität",
      "Führungserfahrung von Vorteil",
    ],
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const JobOffers = () => {
  const renderRequirements = (requirements) => {
    return requirements.map((req, idx) => {
      if (typeof req === "object") {
        return (
          <div key={idx} className="space-y-2">
            <div className="flex items-start gap-2 text-sm md:text-base text-gray-600">
              <FaCheckCircle className="mt-1 text-[#24aae1] flex-shrink-0" />
              <span>{req.title}</span>
            </div>
            <ul className="ml-6 space-y-1">
              {req.subItems.map((item, subIdx) => (
                <li
                  key={subIdx}
                  className="flex items-start gap-2 text-sm md:text-base text-gray-600"
                >
                  <span className="text-[#24aae1]">○</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return (
        <li
          key={idx}
          className="flex items-start gap-2 text-sm md:text-base text-gray-600"
        >
          <FaCheckCircle className="mt-1 text-[#24aae1] flex-shrink-0" />
          <span>{req}</span>
        </li>
      );
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <FaBriefcase />
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
            <FaGraduationCap />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:py-48">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-2xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Karriere bei der{" "}
                <span className="block bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
                  TuRom GmbH
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                Ihre Chance auf eine sichere Zukunft!
              </p>
              <p className="text-sm md:text-base  text-gray-600 mb-8">
                Sie suchen spannende Herausforderungen, innovative Projekte und
                eine sichere Perspektive? Bei der TuRom GmbH haben Sie die
                Möglichkeit, die Infrastruktur von morgen aktiv mitzugestalten.
                Werden Sie Teil unseres Teams und bringen Sie Ihr Know-how ein!
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                Gemeinsam Großes bewegen!
              </p>
              <div className=" flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@turom-gmbh.de"
                  className="inline-flex items-center justify-center w-fit px-6 py-3 md:px-8 md:py-4 border-2 border-[#24aae1] text-[#24aae1] rounded-lg hover:bg-[#24aae1] hover:text-white transition-all duration-300  md:font-semibold text-sm md:text-base transform hover:-translate-y-1"
                >
                  <FaEnvelope className="mr-2" />
                  Jetzt bewerben
                </a>
              </div>
            </motion.div>

            {/* Right Column - Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { number: "10+", text: "Jahre Erfahrung" },
                { number: "50+", text: "Mitarbeiter" },
                { number: "2", text: "Offene Positionen" },
                { number: "100%", text: "Engagement" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-[#06234B]/10 text-center h-[120px] md:h-auto flex flex-col justify-center items-center"
                >
                  <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 md:font-medium">
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
          className="hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center"
        >
          <div className="text-gray-400 mb-2 text-sm">Mehr entdecken</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white">
        {/* Benefits Section */}
        <JobInfo />
        {/* Job Listings Section */}
        <section className="py-0 md:py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-20"
            >
              <span className="text-[#24aae1] text-base sm:text-3xl md:text-4xl lg:text-5xl  font-medium">
                Karriere
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold mt-2">
                Aktuelle Stellenangebote
              </h2>
              <div className="w-20 h-1 bg-[#24aae1] mx-auto mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Job Header */}
                  <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-4">
                        <h3 className="text-base md:text-4xl font-medium md:font-bold text-white">
                          {job.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Job Content */}
                  <div className="py-4 px-2 md:p-8">
                    {[
                      {
                        title: "Aufgaben",
                        icon: <FaBriefcase />,
                        items: job.tasks,
                        bgColor: "from-[#24aae1]/5 to-[#24aae1]/10",
                      },
                      {
                        title: "Profil",
                        icon: <FaUsers />,
                        items: job.profile,
                        bgColor: "from-[#146fad]/5 to-[#146fad]/10",
                      },
                      {
                        title: "Anforderungen",
                        icon: <FaGraduationCap />,
                        items: job.requirements,
                        bgColor: "from-[#24aae1]/5 to-[#24aae1]/10",
                      },
                    ].map((section, idx) => (
                      <div
                        key={idx}
                        className={`mb-8 rounded-xl bg-gradient-to-br ${section.bgColor} p-2 md:p-8 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center gap-4 mb-6 border-b border-[#24aae1]/10 pb-4">
                          <div className="w-8 h-8 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center text-[#24aae1] text-xl md:text-2xl shadow-sm">
                            {section.icon}
                          </div>
                          <h4 className="text-lg md:text-xl font-medium  md:font-semibold text-gray-900">
                            {section.title}
                          </h4>
                        </div>

                        <ul className="space-y-4">
                          {Array.isArray(section.items) &&
                            section.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="group flex items-center gap-4 bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-[#24aae1] group-hover:scale-125 transition-transform duration-300" />
                                </div>
                                <span className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                  {typeof item === "object" ? item.title : item}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add this new section after the job listings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8   bg-white rounded-2xl p-6 md:p-16 shadow-lg border border-gray-100 text-center"
            >
              <h3 className="text-base md:text-2xl font-base md:font-medium mb-6 bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
                Haben wir Ihr Interesse geweckt? Dann Klingt das nach der
                richtigen Herausforderung für Sie? <br /> Dann zögern Sie nicht
                und bewerben Sie sich! Wir freuen uns darauf, Sie
                kennenzulernen.
              </h3>

              <a
                href="mailto:info@turom-gmbh.de"
                className="inline-flex items-center justify-center w-fit px-6 py-3 md:px-8 md:py-4 border-2 border-[#24aae1] text-[#24aae1] rounded-lg hover:bg-[#24aae1] hover:text-white transition-all duration-300  md:font-semibold font-medium text-sm md:text-base transform hover:-translate-y-1"
              >
                <FaEnvelope className="mr-2" />
                Jetzt bewerben
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobOffers;
