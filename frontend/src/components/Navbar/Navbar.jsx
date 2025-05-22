import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-1/2 w-[90%] sm:w-[80%] transform -translate-x-1/2 z-50 px-4 sm:px-6 py-2 mt-4 flex items-center justify-between rounded-xl shadow-lg border border-white/20 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "bg-white/10" : "bg-white/5"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center mr-2">
          <img src={logo} alt="logo img" className="h-6 sm:h-8" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#D9D9D9] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <NavbarDesktop />

        {/* Desktop Button */}
        <div className="hidden sm:flex items-center">
          <button className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[1px] hover:cursor-pointer">
            <span className="relative block bg-gray-900 px-4 sm:px-5 py-1.5 sm:py-2 rounded-[calc(0.5rem-1px)] text-[#D9D9D9] text-xs sm:text-sm transition-all duration-300 group-hover:bg-opacity-50">
              Start Free Trial
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Navbar;
