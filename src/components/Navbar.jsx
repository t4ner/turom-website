import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo/logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-xl shadow-lg py-3"
          : "bg-black/10 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className={`h-12 md:h-20 transition-all duration-300 ${
                  isScrolled ? "brightness-100" : "brightness-[1000]"
                }`}
                loading="lazy"
                style={{
                  filter: isScrolled
                    ? "none"
                    : "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <Link
                to="/"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Startseite
                {location.pathname === "/" && (
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            </div>

            <div className="relative">
              <Link
                to="/stellenangebote"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Stellenangebote
                {location.pathname === "/stellenangebote" && (
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            </div>

            <div className="relative">
              <Link
                to="/uber-uns"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Über uns
                {location.pathname === "/uber-uns" && (
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <Link to="/kontakt">
            <button
              className={`hidden md:flex items-center gap-2 px-8 py-2.5 cursor-pointer ${
                isScrolled
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              } transition-all duration-300`}
            >
              <span className="text-sm tracking-wider font-medium">
                Kontakt
              </span>
              <span>→</span>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 w-full h-[2px] transform transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                } ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`absolute left-0 top-[9px] w-full h-[2px] transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] transform transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                } ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-300">
          <div className="relative h-full p-6 flex flex-col justify-center items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <div className="space-y-8 text-center w-full pb-20">
              <div>
                <Link
                  to="/"
                  className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Startseite
                </Link>
              </div>

              <div>
                <Link
                  to="/stellenangebote"
                  className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Stellenangebote
                </Link>
              </div>

              <div>
                <Link
                  to="/uber-uns"
                  className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Über uns
                </Link>
              </div>

              <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                <button className="max-w-xs mx-auto px-10 py-4 bg-black text-white text-xl font-medium transition-all duration-300 hover:bg-black/90 cursor-pointer">
                  Kontakt
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
