import { personalInfo } from "../../constants";
import drop1 from "../../assets/features/drop1.svg";
import img1 from "../../assets/features/img1.svg";
import { useContext } from "react";
import { themeContext } from "../../context/context";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();
  const points = t("features.section1.points", { returnObjects: true });

  return (
    <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
      <div
        className={`absolute inset-0 -z-10 rounded-2xl  backdrop-blur-[16px] ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] border border-white/10 shadow-xl"
            : "bg-white border border-gray-300 shadow-xl"
        }`}
      ></div>
      <div className="w-full max-w-full flex flex-col sm:flex-row justify-between relative z-10">
        {/* left section */}
        <div className="flex w-full sm:w-[60%] md:w-[60%]">
          <img src={drop1} alt="drop1" className="hidden sm:block" />
          <div className="flex flex-col gap-4">
            <div className="flex pl-4">
              <h2
                className={`head-feature text-xl sm:text-2xl ${
                  theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                }`}
              >
                {t("features.section1.heading")}
              </h2>
            </div>
            {personalInfo.map((info) => (
              <div key={info.id} className="flex items-center gap-2 mb-3">
                <div className="flex items-top pl-4 h-12">
                  <img
                    src={info.src}
                    alt="check"
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  />
                </div>
                <p
                  className={`subheading text-left text-sm sm:text-base max-w-[80%] ${
                    theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                  }`}
                >
                  {points[info.id - 1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex justify-center items-center mt-6 sm:mt-0 sm:pr-5">
          <img
            src={img1}
            alt="img1"
            className="max-w-full sm:max-w-none h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
