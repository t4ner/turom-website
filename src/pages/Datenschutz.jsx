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

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-[#24aae1] to-[#146fad] p-4 rounded-t-xl">
              <h2 className="text-white text-base md:text-lg font-normal md:font-medium">
                Informationen zum Datenschutz nach EU-DSGVO
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-gray-600 mb-2 text-sm md:text-base">
                  Unser Unternehmen prüft regelmäßig bei Vertragsabschlüssen und
                  in bestimmten Fällen, in denen ein berechtigtes Interesse
                  vorliegt auch bei Bestandskunden Ihre Bonität. Dazu arbeiten
                  wir mit der Creditreform Boniversum GmbH, Hammfelddamm 13,
                  41460 Neuss zusammen, von der wir die dazu benötigten Daten
                  erhalten. Im Auftrage von Creditreform Boniversum teilen wir
                  Ihnen bereits vorab dazu folgende Informationen gem. Art. 14
                  EU-DSGVO mit: <br /> <br /> Die Creditreform Boniversum GmbH
                  ist eine Konsumentenauskunftei. Sie betreibt eine Datenbank,
                  in der Bonitätsinformationen über Privatpersonen gespeichert
                  werden. <br />
                  <br />
                  Auf dieser Basis erteilt Creditreform Boniversum
                  Bonitätsauskünfte an ihre Kunden. Zu den Kunden gehören
                  beispielsweise Kreditinstitute, Leasinggesellschaften,
                  Versicherungen,Telekommunikations- unternehmen, Unternehmen
                  des Forderungsmanagements, Versand-, Groß- und
                  Einzelhandelsfirmen sowie andere Unternehmen, die Waren oder
                  Dienstleistungen liefern bzw. erbringen. Im Rahmen der
                  gesetzlichen Bestimmungen wird ein Teil der in der
                  Auskunftsdatenbank vorhandenen Daten auch für die Belieferung
                  anderer Firmendatenbanken, u. a. zur Verwendung für
                  Adress-Handelszwecke genutzt. <br />
                  <br /> In der Datenbank der Creditreform Boniversum werden
                  insbesondere Angaben gespeichert über den Namen, die
                  Anschrift, das Geburtsdatum, ggf. die E-Mail-Adresse, das
                  Zahlungsverhalten und die Beteiligungsverhältnisse von
                  Personen. Zweck der Verarbeitung der gespeicherten Daten ist
                  die Erteilung von Auskünften über die Kreditwürdigkeit der
                  angefragten Person. Rechtsgrundlage für die Verarbeitung ist
                  Art. 6 Abs. 1f EU-DSGVO. Auskünfte über diese Daten dürfen
                  danach nur erteilt werden, wenn ein Kunde ein berechtigtes
                  Interesse an der Kenntnis dieser Informationen glaubhaft
                  darlegt. Sofern Daten in Staaten außerhalb der EU übermittelt
                  werden, erfolgt dies auf Basis der sog.
                  „Standardvertragsklauseln", die Sie unter dem Link{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE
                  </a>{" "}
                  einsehen oder sich von dort zusenden lassen können. <br />
                  <br /> Die Daten werden solange gespeichert, wie ihre Kenntnis
                  für die Erfüllung des Zwecks der Speicherung notwendig ist.
                  Notwendig ist die Kenntnis in der Regel für eine Speicherdauer
                  von zunächst drei Jahren. Nach Ablauf wird geprüft, ob eine
                  Speicherung weiterhin notwendig ist, andernfalls werden die
                  Daten taggenau gelöscht. Im Falle der Erledigung eines
                  Sachverhalts werden die Daten drei Jahre nach Erledigung
                  taggenau gelöscht. Eintragungen im Schuldnerverzeichnis werden
                  gemäß § 882e ZPO nach Ablauf von drei Jahren seit dem Tag der
                  Eintragungsanordnung taggenau gelöscht. Weitere Informationen
                  finden Sie dazu auch unter{" "}
                  <a
                    href="http://www.boniversum.de/bonipedia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    www.boniversum.de/bonipedia/
                  </a>{" "}
                  unter der Rubrik Datenlöschung. <br />
                  <br /> Berechtigte Interessen im Sinne des Art. 6 Abs. 1f
                  EU-DSGVO können sein: Kreditentscheidung, Geschäftsanbahnung,
                  Beteiligungsverhältnisse, Forderung, Bonitätsprüfung,
                  Versicherungsvertrag, Vollstreckungsauskunft.
                  <br />
                  <br /> Sie haben gegenüber der Creditreform Boniversum GmbH
                  ein Recht auf Auskunft über die dort zu Ihrer Person
                  gespeicherten Daten. Soweit die über Sie gespeicherten Daten
                  falsch sein sollten, haben Sie einen Anspruch auf Berichtigung
                  oder Löschung. Kann nicht sofort festgestellt werden, ob die
                  Daten falsch oder richtig sind, haben Sie bis zur Klärung
                  einen Anspruch auf Sperrung der jeweiligen Daten. Sind Ihre
                  Daten unvollständig, so können Sie deren Vervollständigung
                  verlangen. <br />
                  <br /> Sofern Sie Ihre Einwilligung zur Verarbeitung der bei
                  Creditreform Boniversum gespeicherten Daten gegeben haben,
                  haben Sie das Recht, diese Einwilligung jederzeit zu
                  widerrufen. Durch den Widerruf wird die Rechtmäßigkeit der
                  aufgrund Ihrer Einwilligung bis zu einem etwaigen Widerruf
                  erfolgten Verarbeitung Ihrer Daten nicht berührt. <br />
                  <br /> Sollten Sie Einwände, Wünsche oder Beschwerden zum
                  Datenschutz haben, können Sie sich mit den unten aufgeführten
                  Kontaktdaten jederzeit an den Datenschutzbeauftragten der
                  Creditreform Boniversum wenden. Dieser wird Ihnen schnell und
                  vertrauensvoll in allen Fragen des Datenschutzes weiterhelfen.
                  Im Falle eines vermuteten Datenschutzverstoßes haben Sie das
                  Recht, sich bei einer Landesdatenschutzaufsichtsbehörde zu
                  beschweren. Zuständig für die Creditreform Boniversum ist die
                  Landesbeauftragte für Datenschutz NRW, Postfach 20 24 44,
                  40102 Düsseldorf, E-Mail:{" "}
                  <a
                    href="mailto:poststelle@ldi.nrw.de"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    poststelle@ldi.nrw.de
                  </a>
                  . <br />
                  <br /> Die Daten, die Creditreform Boniversum zu Ihnen
                  gespeichert hat, stammen aus öffentlich zugänglichen Quellen,
                  von Inkassounternehmen und von deren Kunden. Um Ihre Bonität
                  zu beschreiben, bildet Creditreform Boniversum zu Ihren Daten
                  einen Scorewert. In den Scorewert fließen Daten zu Alter und
                  Geschlecht, Adressdaten und teilweise Zahlungserfahrungsdaten
                  ein. Diese Daten fließen mit unterschiedlicher Gewichtung in
                  die Scorewertberechnung ein. Die Creditreform
                  Boniversum-Kunden nutzen die Scorewerte als Hilfsmittel bei
                  der Durchführung eigener Kreditentscheidungen. <br />
                  <br />{" "}
                  <span className="font-semibold">Widerspruchsrecht:</span>{" "}
                  <br />
                  <br />
                  Sie können nach Art. 21 Abs. 1 DSGVO der Datenverarbeitung aus
                  Gründen, die sich aus Ihrer besonderen Situation ergeben (z.
                  B. Frauenhaus oder Zeugenschutz), widersprechen. Ihren
                  formlosen Widerspruch können Sie schriftlich an die
                  Creditreform Boniversum GmbH, Hammfelddamm 13, 41460 Neuss
                  oder per E-Mail an{" "}
                  <a
                    href="mailto:selbstauskunft@boniversum.de"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    selbstauskunft@boniversum.de
                  </a>{" "}
                  richten. <br />
                  <br /> Wenn Sie der Verarbeitung Ihrer Daten für Werbe- und
                  Marketingzwecke bei der Boniversum widersprechen, werden die
                  Daten für diese Zwecke nicht mehr verarbeitet. <br />
                  <br /> Verantwortlich im Sinne des Art. 4 Nr. 7 EU-DSGVO ist
                  die Creditreform Boniversum GmbH, Hammfelddamm 13, 41460
                  Neuss. Ihr Ansprechpartner bei der Boniversum ist der Consumer
                  Service, Tel.: 02131 36845560, Fax: 02131 36845570, E-Mail:{" "}
                  <a
                    href="mailto:selbstauskunft@boniversum.de"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    selbstauskunft@boniversum.de
                  </a>
                  . <br />
                  <br /> Den zuständigen Datenschutzbeauftragten der Boniversum
                  erreichen Sie unter folgenden Kontaktdaten: Creditreform
                  Boniversum GmbH, Datenschutzbeauftragter, Hammfelddamm 13,
                  41460 Neuss, E-Mail:{" "}
                  <a
                    href="mailto:datenschutz@boniversum.de"
                    className="text-[#24aae1] hover:text-[#146fad]"
                  >
                    datenschutz@boniversum.de
                  </a>
                </p>
                <div>
                  <a
                    href="https://www.creditreform.de/heidelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/logo/datenlogo.png"
                      alt="Creditreform Boniversum"
                      className="w-20 md:w-28 mt-7 md:mt-8 hover:opacity-80 transition-opacity duration-300"
                    />
                  </a>
                </div>
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
