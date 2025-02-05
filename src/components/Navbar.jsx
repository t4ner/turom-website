import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-xl shadow-lg py-3"
          : "bg-black/10 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
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
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Startseite
                {location.pathname === "/" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/stellenangebote"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Stellenangebote
                {location.pathname === "/stellenangebote" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/uber-uns"
                className={`relative tracking-wider transition-all duration-300 ${
                  isScrolled ? "text-black/80" : "text-white"
                } hover:text-opacity-100`}
              >
                Über uns
                {location.pathname === "/uber-uns" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-black" : "bg-white"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.div>
          </div>

          {/* Contact Button */}
          <Link to="/kontakt">
            <motion.button
              className={`hidden md:flex items-center gap-2 px-8 py-2.5 ${
                isScrolled
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              } transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm tracking-wider font-medium">
                Kontakt
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className={`absolute left-0 top-0 w-full h-[2px] transform origin-center transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
              />
              <motion.span
                className={`absolute left-0 top-[9px] w-full h-[2px] transform origin-center transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className={`absolute left-0 bottom-0 w-full h-[2px] transform origin-center transition-all duration-300 ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40"
          >
            <div className="relative h-full p-6 flex flex-col justify-center items-center">
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6"
                whileTap={{ scale: 0.95 }}
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
              </motion.button>

              {/* Menu Items */}
              <div className="space-y-8 text-center w-full pb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Startseite
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="/stellenangebote"
                    className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Stellenangebote
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/uber-uns"
                    className="block text-2xl text-black/80 hover:text-black font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Über uns
                  </Link>
                </motion.div>

                <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                  <motion.button
                    className="max-w-xs mx-auto px-10 py-4 bg-black text-white text-xl font-medium transition-all duration-300 hover:bg-black/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Kontakt
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
