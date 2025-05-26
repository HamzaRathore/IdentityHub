import { useContext } from "react";
import { useTranslation } from "react-i18next";
import BackgroundImg from "../BackgroundImg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import GradientLabel from "../GradientLabel";
import { themeContext } from "../../context/context";

const Features = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <div
      className={`w-full pt-20 flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 lg:pt-60 md:pt-40 sm:pt-20 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <BackgroundImg />

      <div className="relative w-[85.2%] z-20 max-w-[88.5%] mx-auto text-center flex flex-col justify-center items-center">
        <div className="relative w-full sm:w-[60%] md:w-[50%] lg:w-[33%] z-20 max-w-3xl mx-auto px-4 text-center flex flex-col justify-center items-center">
          <GradientLabel text={t("features.title")} />

          <div
            className={`heading mt-2 w-full text-2xl sm:text-3xl md:text-4xl ${
              theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
            }`}
          >
            <h2>
              {t("features.heading1")}{" "}
              <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
                {t("features.heading2")}
              </span>{" "}
              {t("features.heading3")}
            </h2>
          </div>

          <div
            className={`subheading mt-4 w-full ${
              theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
            }`}
          >
            <p>{t("features.description")}</p>
          </div>
        </div>

        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
};

export default Features;
