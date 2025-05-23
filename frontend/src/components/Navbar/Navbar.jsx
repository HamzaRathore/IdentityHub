import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { themeContext } from "../../context/context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useContext(themeContext);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
        className={`fixed top-0 left-1/2 w-[90%] sm:w-[80%] transform -translate-x-1/2 z-50 px-4 sm:px-6 py-2 mt-4 flex items-center justify-between rounded-xl shadow-lg backdrop-blur-xl transition-all duration-300
    ${
      theme === "dark"
        ? "border-white/20 bg-white/5"
        : "border-black/20 bg-gradient-to-r from-[#2225d8] to-[#ac2ec5]"
    }
    ${isScrolled ? "bg-opacity-30" : "bg-opacity-10"}
  `}
      >
        {/* Logo */}
        <div className={`flex items-center mr-2 ${theme==='dark'?"text-white":'text-black'} `}>
          <img src={logo} alt="logo img" className={`h-6 sm:h-8 ${theme==='dark'?"":'fill-black'}`} />
        </div>

        {/* Mobile Toggle */}
        <div className=" md:hidden pl-32 " >
          {theme === "dark" ? (
            <MdOutlineLightMode onClick={toggle} className="h-6 w-6  hover:cursor-pointer hover:scale-105 transition-all duration-150 text-white" />
          ) : (
            <MdOutlineDarkMode onClick={toggle} className="h-6 w-6  hover:cursor-pointer text-black hover:scale-105 transition-all duration-150" />
          )}
          </div>

        <button
          className="md:hidden text-[#D9D9D9] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <NavbarDesktop />

        {/* Desktop Button */}
        <div className="hidden sm:flex items-center" >
          {theme === "dark" ? (
            <MdOutlineLightMode onClick={toggle} className="h-8 w-8 mr-4 hover:cursor-pointer hover:scale-105 transition-all duration-150 text-white" />
          ) : (
            <MdOutlineDarkMode onClick={toggle} className="h-8 w-8 mr-4 hover:cursor-pointer text-black hover:scale-105 transition-all duration-150" />
          )}

          <button className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[1px] hover:cursor-pointer">
            <span className={`relative block  px-4 sm:px-5 py-1.5 sm:py-2 rounded-[calc(0.5rem-1px)]  text-xs sm:text-sm transition-all duration-300 group-hover:bg-opacity-50 ${theme === 'dark'?'bg-gray-900 text-[#D9D9D9]':'bg-white text-[#585858]'}`}>
              Start Free Trial
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
