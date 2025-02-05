import React from "react";

const Datenschutz = () => {
  return (
    <div className="relative min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent p-2">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="grid gap-6 mb-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Datenschutz */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Datenschutz
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Die Betreiber dieser Webseite nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften.
                </p>
              </div>
            </div>

            {/* Verantwortliche Stelle */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Verantwortliche Stelle
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base">
                  TuRom Gesellschaft mit beschränkter Haftung
                  <br />
                  Südendstraße 7/1
                  <br />
                  76709 Kronau
                  <br />
                  Telefon: +49 (0)7253 9583-790
                  <br />
                  E-Mail: info@turom-gmbh.de
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Cookies
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base">
                  Unsere Webseite verwendet Cookies. Cookies sind kleine
                  Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir
                  verwenden Cookies, um unser Angebot nutzerfreundlicher und
                  effektiver zu gestalten. Weitere Informationen finden Sie in
                  unserer Cookie-Richtlinie.
                </p>
              </div>
            </div>
          </div>

          {/* İkinci satır - Ihre Rechte */}
          <div className="grid grid-cols-1 gap-6">
            {/* Ihre Rechte */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Ihre Rechte
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Sie haben das Recht:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm md:text-base">
                  <li>
                    gemäß Art. 15 DSGVO Auskunft über Ihre bei uns verarbeiteten
                    personenbezogenen Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder
                    Vervollständigung Ihrer Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 17 DSGVO die Löschung Ihrer Daten zu verlangen,
                    sofern keine rechtlichen Verpflichtungen entgegenstehen
                  </li>
                  <li>
                    gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                    Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 20 DSGVO Ihre Daten in einem maschinenlesbaren
                    Format zu erhalten
                  </li>
                  <li>
                    gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung
                    jederzeit zu widerrufen
                  </li>
                  <li>
                    gemäß Art. 77 DSGVO Beschwerde bei einer Aufsichtsbehörde
                    einzureichen
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* İkinci satır - Datenerhebung full width */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Erhebung und Speicherung personenbezogener Daten
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-gray-800 md:font-medium mb-2">
                  1. Beim Besuch der Webseite
                </h3>
                <p className="text-gray-600 mb-2 text-sm md:text-base">
                  Beim Aufrufen unserer Webseite werden durch den auf Ihrem
                  Endgerät zum Einsatz kommenden Browser automatisch
                  Informationen an den Server unserer Webseite gesendet. Diese
                  Informationen werden temporär in einem sogenannten Logfile
                  gespeichert.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm md:text-base">
                  <li>IP-Adresse des anfragenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Webseite, von der der Zugriff erfolgt (Referrer-URL)</li>
                  <li>
                    verwendeter Browser und Betriebssystem sowie der Name Ihres
                    Access-Providers
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 md:font-medium mb-2">
                  2. Verarbeitung der Daten
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Diese Daten werden zur Sicherstellung eines reibungslosen
                  Verbindungsaufbaus, der komfortablen Nutzung unserer Webseite
                  sowie zur Systemsicherheit und -stabilität verarbeitet (Art. 6
                  Abs. 1 lit. f DSGVO).
                </p>
              </div>
              <div>
                <h3 className="text-gray-800 md:font-medium mb-2">
                  3. Kontaktaufnahme
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren,
                  werden Ihre Angaben inklusive der angegebenen Kontaktdaten
                  zwecks Bearbeitung der Anfrage gespeichert (Art. 6 Abs. 1 lit.
                  a DSGVO). Diese Daten geben wir nicht ohne Ihre Zustimmung
                  weiter.
                </p>
              </div>
            </div>
          </div>

          {/* Weitergabe von Daten und Widerspruchsrecht */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weitergabe von Daten */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Weitergabe von Daten
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Wir geben Ihre personenbezogenen Daten nur weiter, wenn:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm md:text-base">
                  <li>
                    Sie Ihre ausdrückliche Einwilligung dazu gegeben haben (Art.
                    6 Abs. 1 lit. a DSGVO)
                  </li>
                  <li>
                    dies zur Erfüllung eines Vertrags erforderlich ist (Art. 6
                    Abs. 1 lit. b DSGVO)
                  </li>
                  <li>
                    eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c
                    DSGVO)
                  </li>
                  <li>
                    die Verarbeitung zur Wahrung unserer berechtigten Interessen
                    erforderlich ist und Ihre Interessen nicht überwiegen (Art.
                    6 Abs. 1 lit. f DSGVO)
                  </li>
                </ul>
              </div>
            </div>

            {/* Widerspruchsrecht */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Widerspruchsrecht
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base">
                  Wenn wir Ihre Daten auf Basis berechtigter Interessen
                  verarbeiten, können Sie gemäß Art. 21 DSGVO Widerspruch
                  einlegen, sofern sich aus Ihrer besonderen Situation Gründe
                  ergeben, die gegen die Verarbeitung sprechen.
                </p>
              </div>
            </div>
          </div>

          {/* Sicherheitsmaßnahmen und Aktualität */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sicherheitsmaßnahmen */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Sicherheitsmaßnahmen
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base">
                  Wir setzen technische und organisatorische
                  Sicherheitsmaßnahmen ein, um Ihre Daten vor Manipulation,
                  Verlust, Zerstörung oder dem Zugriff unberechtigter Personen
                  zu schützen.
                </p>
              </div>
            </div>

            {/* Aktualität und Änderungen */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
                <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                  Aktualität und Änderungen
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base">
                  Diese Datenschutzerklärung hat den Stand Januar 2025. Wir
                  behalten uns vor, die Datenschutzerklärung bei Änderungen der
                  Rechtslage oder der Datenverarbeitung anzupassen. Die jeweils
                  aktuelle Version finden Sie auf unserer Webseite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
