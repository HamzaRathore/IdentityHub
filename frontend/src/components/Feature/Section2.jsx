import { detail, grid } from "../../constants";
import drop2 from "../../assets/features/drop2.svg";
import { useContext } from "react";
import { themeContext } from "../../context/context";

const Section2 = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
      {/* Background with dynamic theme */}
      <div
        className={`absolute inset-0 -z-10 rounded-2xl backdrop-blur-[16px] ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] border border-white/10 shadow-xl"
            : "bg-white border border-gray-300 shadow-xl"
        }`}
      ></div>

      <div className="w-full max-w-full mt-6 sm:mt-10 flex flex-col sm:flex-row justify-between relative z-10">
        {/* left section */}
        <div className="flex w-full sm:w-[60%] md:w-[50%]">
          <img src={drop2} alt="drop2" className="hidden sm:block" />
          <div className="flex flex-col gap-4">
            <div className="flex pl-4">
              <h2
                className={`head-feature text-xl sm:text-2xl ${
                  theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                }`}
              >
                Detailed Reporting
              </h2>
            </div>
            {detail.map((details) => (
              <div key={details.id} className="flex items-center gap-2 mb-3">
                <div className="flex items-top pl-4 h-12">
                  <img
                    src={details.src}
                    alt="check"
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  />
                </div>
                <p
                  className={`subheading text-left text-sm sm:text-base max-w-[90%] ${
                    theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                  }`}
                >
                  {details.point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex w-full sm:w-[40%] items-center justify-center mt-6 sm:mt-0 md:pl-13">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
            {grid.map((item) => (
              <div
                key={item.id}
                className={`relative w-full sm:w-auto rounded-lg p-2 sm:p-4 text-left backdrop-blur-md ${
                  theme === "dark"
                    ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15"
                    : "border border-gray-200 bg-white/40 shadow-md"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    <span>
                      <img
                        src={item.src}
                        alt="icon"
                        className="w-full h-full"
                      />
                    </span>
                  </div>
                  <div>
                    <p
                      className={`text-sm md:text-xs ${
                        theme === "dark" ? "text-[#CAC6DD]" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-xs md:text-sm ${
                        theme === "dark" ? "text-[#CAC6DD]" : "text-gray-600"
                      }`}
                    >
                      {item.point}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
