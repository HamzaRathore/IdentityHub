import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import GradientLabel from "../GradientLabel";
import { themeContext } from "../../context/context";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <div
      className={`w-full min-h-screen pt-20 lg:pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 md:pt-40 ${
        theme === "dark" ? "bg-black" : "bg-white"
      } `}
    >
      {/* Content container */}
      <div className="relative w-[40%] z-20 max-w-5xl mx-auto px-4 text-center flex flex-col justify-center items-center md:pt-40 ">
        {/* Gradient label */}
        <GradientLabel text={t("services.label")} />

        <div
          className={`heading mt-2 w-97 text-4xl ${
            theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
          }`}
        >
          <h2>
            {t("services.title")}{" "}
            <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
              {t("services.highlight")}
            </span>
          </h2>
        </div>
        <div className="subheading mt-2 w-72 md:w-[85%] lg:w-[90%] ">
          <p>{t("services.description")}</p>
        </div>
      </div>

      {/* Card component */}
      <Card />
    </div>
  );
};

export default Services;
