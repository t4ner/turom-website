import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5lcznup", "template_3b29ger", form.current, {
        publicKey: "PTCU4WX568fR4ym8L",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          toast.error("Beim Senden der E-Mail ist ein Fehler aufgetreten!");
        }
      );
  };

  return (
    <div className="min-h-screen pt-20 md:pt-32 bg-gradient-to-b from-gray-50 to-white">
      <ToastContainer />
      <div className="px-4 pt-10 md:pt-16 md:py-12 mb-20 md:px-6 lg:px-8">
        <div className="mx-auto container">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns
              gerne per E-Mail, Telefon oder über das Kontaktformular.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 md:mb-16">
            {[
              {
                icon: (
                  <FaMapMarkerAlt className="text-[#24aae1] text-2xl md:text-3xl" />
                ),
                title: "Adresse",
                content: (
                  <>
                    TuRom GmbH
                    <br />
                    Südendstraße 7/1
                    <br />
                    76709 Kronau
                  </>
                ),
              },
              {
                icon: (
                  <FaPhone className="text-[#24aae1] text-2xl md:text-3xl" />
                ),
                title: "Kontakt",
                content: (
                  <>
                    Tel: +49 (0)7253 9583-792
                    <br />
                    E-Mail: info@turom-gmbh.de
                  </>
                ),
              },
              {
                icon: (
                  <FaClock className="text-[#24aae1] text-2xl md:text-3xl" />
                ),
                title: "Bürozeiten",
                content: (
                  <>
                    Montag bis Freitag:
                    <br />
                    8:00 - 16:30 Uhr
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:scale-[1.03]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2606.5033269315513!2d8.625494!3d49.2099809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479797e0c8495a73%3A0x1db0f37c7d4543ed!2sTuRom%20GmbH!5e0!3m2!1sen!2str!4v1738247205727!5m2!1sen!2str"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="px-4 md:px-0 pb-5 md:pb-0 lg:p-12">
              <h2 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#24aae1] to-[#146fad] bg-clip-text text-transparent mb-4 md:mb-8">
                Schreiben Sie uns eine Nachricht
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    name="user_name"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-300 focus:border-[#24aae1] focus:ring-2 focus:ring-[#24aae1] focus:ring-opacity-50 outline-none transition-all duration-300 hover:scale-[1.02]"
                  />
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-300 focus:border-[#24aae1] focus:ring-2 focus:ring-[#24aae1] focus:ring-opacity-50 outline-none transition-all duration-300 hover:scale-[1.02]"
                  />
                </div>
                <input
                  type="text"
                  required
                  name="user_telephone"
                  placeholder="Ihre Telefonnummer"
                  className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-300 focus:border-[#24aae1] focus:ring-2 focus:ring-[#24aae1] focus:ring-opacity-50 outline-none transition-all duration-300 hover:scale-[1.02]"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Ihre Nachricht..."
                  className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-gray-300 focus:border-[#24aae1] focus:ring-2 focus:ring-[#24aae1] focus:ring-opacity-50 outline-none transition-all duration-300 min-h-[150px] resize-y hover:scale-[1.02]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r text-sm md:text-base from-[#24aae1] to-[#146fad] text-white rounded-xl md:font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
