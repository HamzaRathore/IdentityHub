import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import esFlag from "../assets/Spanish.png";
import enFlag from "../assets/English.png";
import { themeContext } from "../context/context";

const LanguageSwitcher = () => {

    const {theme}=useContext(themeContext)
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <button
        onClick={() => changeLanguage("en")}
        className="flex items-center gap-2"
      >
        <img
          src={enFlag}
          alt="English"
          className={`h-6 w-6 rounded-full border-2 hover:cursor-pointer ${
            i18n.language === "en" ? "border-blue-800" : "border-transparent"
          }`}
        />
        <span className="text-white">English</span>
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="flex items-center gap-2"
      >
        <img
          src={esFlag}
          alt="Spanish"
          className={`h-6 w-6 rounded-full border-2 hover:cursor-pointer ${
            i18n.language === "es" ? "border-blue-500" : "border-transparent"
          }`}
        />
        <span className="text-white">Spanish</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
