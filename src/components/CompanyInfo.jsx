import React from "react";

const CompanyInfo = () => {
  return (
    <div className="relative pv-10 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(36,170,225,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-lg p-6 md:p-12 rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-8">
                  Über Uns
                </h2>
                <p className="text-sm md:text-base text-black/70 mb-8 leading-relaxed">
                  Mit einem erweiterten Team und gebündeltem Know-how sind wir
                  heute Ihr zuverlässiger Partner für maßgeschneiderte Lösungen
                  im Bau- und Industrieservice
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
                  vereinbaren Sie ein Gespräch mit uns – wir freuen uns auf Ihre
                  Anfrage!
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="h-full rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="/hero/bg1.webp"
                alt="Bauarbeiten"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
