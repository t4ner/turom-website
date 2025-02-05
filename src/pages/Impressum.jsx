import React from "react";

const Impressum = () => {
  return (
    <div className="relative min-h-screen pt-32 md:pt-40 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent">
            Impressum
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Herausgeber
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                TuRom Gesellschaft mit beschränkter Haftung
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Südendstraße 7/1
              </p>
              <p className="text-gray-600 text-sm md:text-base">76709 Kronau</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Geschäftsführer
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Mehmet Goek
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Ion Alexandru Constantinescu
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Kontakt
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Telefon: +49 (0)7253 9583-790
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Telefax: +49 (0)7253 9583-792
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                E-Mail: info@turom-gmbh.de
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Registereintrag
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Eintragung im Handelsregister
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Registergericht: Amtsgericht Mannheim
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Registernummer: HRB 718849
              </p>
              <p className="text-[#24aae1] font-medium text-sm md:text-base">
                USt-IdNr: DE293372404
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Technische Umsetzung
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                B2B Monster GmbH
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Am Mantel 4
              </p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                76646 Bruchsal
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Web: www.b2b-monster.de
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Haftungsausschluss
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                Die TuRom GmbH prüft und aktualisiert die Inhalte auf dieser
                Webseite regelmäßig. Trotz aller Sorgfalt kann keine Haftung für
                die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                übernommen werden.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Für Inhalte externer Links übernehmen wir keine Verantwortung.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren
                Betreiber verantwortlich.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Urheberrecht
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                dieser Webseite unterliegen dem deutschen Urheberrecht. Beiträge
                Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Hinweis
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Dieses Impressum entspricht den Anforderungen des deutschen
                Telemediengesetzes (TMG) und dient dazu, mögliche rechtliche
                Beanstandungen zu vermeiden. Es wird empfohlen, das Impressum
                regelmäßig zu prüfen und bei Änderungen der rechtlichen
                Anforderungen oder Unternehmensinformationen zu aktualisieren
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
