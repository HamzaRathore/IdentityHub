import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logoo.svg";
import { FaBars } from "react-icons/fa";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { themeContext } from "../../context/context";
import LanguageSwitcher from "../LanguageSwitcher";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { theme, setTheme } = useContext(themeContext);
  const { t } = useTranslation();

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
        <div
          className={`flex items-center mr-2 ${
            theme === "dark" ? "text-white" : "text-black"
          } `}
        >
          <span className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo img"
              className={`h-6 sm:h-8 ${theme === "dark" ? "" : "fill-black"}`}
            />
            <h3
              className={`heading  text-xl ${
                theme === "dark" ? "text-[#CAD1E9]" : "text-white"
              }`}
            >
              IdentityHub
            </h3>
          </span>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center justify-end md:hidden gap-2 pl-20">
          {/* Theme Toggle */}
          {theme === "dark" ? (
            <MdOutlineLightMode
              onClick={toggle}
              className="h-6 w-6 text-white cursor-pointer hover:scale-105 transition-transform duration-150"
            />
          ) : (
            <MdOutlineDarkMode
              onClick={toggle}
              className="h-6 w-6 text-black cursor-pointer hover:scale-105 transition-transform duration-150"
            />
          )}

          {/* Language Switcher */}
          <div className="pr-2 text-white">
            <GrLanguage
              className="h-6 w-6 hover:cursor-pointer hover:scale-105"
              onClick={() => setShowLangDropdown((prev) => !prev)}
            />
          </div>

          {showLangDropdown && (
            <div className="absolute right-[5%] top-[80%] mt-2 w-32 bg-gradient dark:bg-[#1f1f1f] border border-gray-200 dark:border-white/10 rounded-md shadow-md z-50 p-2">
              <LanguageSwitcher />
            </div>
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
        <div className="hidden sm:flex items-center">
          {theme === "dark" ? (
            <MdOutlineLightMode
              onClick={toggle}
              className="h-8 w-8 mr-4 hover:cursor-pointer hover:scale-105 transition-all duration-150 text-white"
            />
          ) : (
            <MdOutlineDarkMode
              onClick={toggle}
              className="h-8 w-8 mr-4 hover:cursor-pointer text-black hover:scale-105 transition-all duration-150"
            />
          )}

          {/* Language button */}
          <div className="pr-4 text-white">
            <GrLanguage
              className="h-6 w-6 hover:cursor-pointer hover:scale-105"
              onClick={() => setShowLangDropdown((prev) => !prev)}
            />
          </div>

          {showLangDropdown && (
            <div className="absolute right-[5%] top-[80%] mt-2 w-32 bg-gradient-to-r from-[#2225d8] to-[#ac2ec5] dark:bg-[#1f1f1f] border border-gray-200 dark:border-white/10 rounded-md shadow-md z-50 p-2">
              <LanguageSwitcher />
            </div>
          )}

          <button className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[1px] hover:cursor-pointer">
            <span
              className={`relative block  px-4 sm:px-5 py-1.5 sm:py-2 rounded-[calc(0.5rem-1px)]  text-xs sm:text-sm transition-all duration-300 group-hover:bg-opacity-50 ${
                theme === "dark"
                  ? "bg-gray-900 text-[#D9D9D9]"
                  : "bg-white text-[#585858]"
              }`}
            >
              {t("nav.startTrial")}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <NavbarMobile
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggle={toggle}
      />
    </>
  );
};

export default Navbar;
