import circle from "../../assets/circle.png";
import bar from "../../assets/bar.svg";
import BackgroundImg from "../BackgroundImg";
import Productivity from "./Productivity";
import PlanetsSection from "../PlanetsSection";
import GradientLabel from "../GradientLabel";
import { themeContext } from "./../../context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <div
      className={`relative w-full pt-36 md:pt-36 lg:pt-36 flex items-center justify-center  overflow-visible ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background img */}
      {theme === "dark" ? <BackgroundImg /> : ""}

      {/* Circle Image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <img
          src={circle}
          alt="Circle background"
          className={`
          opacity-90 h-[100%] md:h-[150%] w-[100%] pr-8 md:pt-40
          ${theme === "light" ? "filter invert" : ""}
        `}
        />
      </div>

      {/* Planets img */}
      <PlanetsSection />

      {/* Content container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center flex flex-col justify-center items-center">
        {/* Gradient label */}
        <GradientLabel text={t("banner.label")} />

        {/* Main heading with gradient */}
        <div className="relative text-center mb-6">
          <h1 className="heading text-3xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-2">
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #F33CC0 0%, #F33CC0 50%, #4349FF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("banner.headlinePart1")}
            </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #4349FF 0%, #4349FF 50%, #F33CC0 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("banner.headlinePart2")}
            </span>
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #F33CC0 0%, #4349FF 50%, #4349FF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("banner.headlinePart3")}
            </span>
          </h1>

          {/* Bar img */}
          <img
            src={bar}
            alt="Colorful bar"
            className="mt-2 md:mr-44 lg:mr-44 mx-auto"
          />
        </div>

        {/* Description */}
        <p
          className={`subheading max-w-2xl mx-auto mb-8 text-sm md:text-xl lg:text-xl ${
            theme === "dark" ? "text-[#CAC6DD]" : "text-gray-600"
          }`}
        >
          {t("banner.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-row  gap-4 justify-center mb-16">
          <button className="w-36 h-10 relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] px-0.5 hover:cursor-pointer">
            <span
              className={`relative block  px-2 py-2 rounded-xl text-[#D9D9D9] text-sm transition-all duration-300 group-hover:bg-opacity-50  ${
                theme === "dark" ? "bg-gray-900" : "bg-white text-black text-lg"
              }`}
            >
              {t("banner.startTrial")}
            </span>
          </button>
          <button className="w-36 h-10 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] text-[#D9D9D9] text-sm flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:cursor-pointer">
            {t("banner.useNow")}
          </button>
        </div>

        {/* Productivity Section */}
        <Productivity />
      </div>
    </div>
  );
};

export default Banner;
