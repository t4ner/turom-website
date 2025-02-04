import React, { memo } from "react";
import Logo from "/logo/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLink = memo(({ to, children }) => (
  <Link
    to={to}
    className="text-[#06234B]/60 hover:text-[#24aae1] transition-all duration-300 text-sm flex items-center gap-2 group "
  >
    <span>{children}</span>
    <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
  </Link>
));

const ContactButton = memo(({ href, icon, text, target }) => (
  <a
    href={href}
    className="flex items-center gap-6 group p-6 rounded-3xl border border-[#24aae1]/10 hover:border-[#24aae1]/20 bg-gradient-to-br from-[#24aae1]/5 to-transparent hover:from-[#24aae1]/10 transition-all duration-500 hover:shadow-lg hover:shadow-[#24aae1]/5"
    target={target}
  >
    <div className="bg-gradient-to-br from-[#24aae1] to-[#146fad] p-2 md:p-4 rounded-2xl text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#24aae1]/20">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[#06234B] text-sm md:text-base font-medium">
        {text}
      </span>
    </div>
  </a>
));

const Footer = () => {
  return (
    <footer className="relative mt-16 md:mt-5 bg-gradient-to-b from-white to-[#f8fbfe] border-t-2 border-[#24aae1]/30">
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5"></div>

      <div className="relative container px-4 mx-auto pt-10 md:pt-24 pb-6 md:pb-12">
        {/* Contact Buttons */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-16 md:mb-24">
          <ContactButton
            href="tel:+49 (0)7253 9583-792"
            icon={<FaPhone />}
            text="+49 (0)7253 9583-792"
            target="_self"
          />
          <ContactButton
            href="mailto:info@turom-gmbh.de"
            icon={<FaEnvelope />}
            text="info@turom-gmbh.de"
            target="_self"
          />
          <ContactButton
            href="https://maps.app.goo.gl/ZmxhY4strjU5gKPy9"
            icon={<FaMapMarkerAlt />}
            text="Standort finden"
            target="_blank"
          />
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between  items-center pt-8 md:pt-12 border-t border-[#06234B]/10">
          <div className="mb-6 md:mb-8">
            <img
              src={Logo}
              alt="macaree Logo"
              className="h-14 md:h-16 hover:opacity-80 transition-opacity duration-300"
            />
          </div>

          <div className="flex flex-col mt-5 md:mt-0 text-[#06234B]/60 text-sm md:text-base sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 mb-6 md:mb-8">
            <FooterLink to="/impressum">Impressum</FooterLink>
            <FooterLink to="/datenschutzerklarung">
              Datenschutzerklärung
            </FooterLink>
          </div>
        </div>
      </div>
      <div className="text-[#06234B]/60 text-sm text-center pb-5">
        © 2024 Macaree. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default memo(Footer);
