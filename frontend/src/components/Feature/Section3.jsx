import { security } from "../../constants";
import email from "../../assets/banner/mail.svg";
import user from "../../assets/banner/user.svg";
import drop3 from "../../assets/features/drop3.svg";
import img3 from "../../assets/features/img3.svg";
import { useContext } from "react";
import { themeContext } from "../../context/context";

const Section3 = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
      {/* Dynamic background */}
      <div
        className={`absolute inset-0 -z-10 rounded-2xl backdrop-blur-[16px] ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] border border-white/10 shadow-xl"
            : "bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] border border-gray-300 shadow-xl"
        }`}
      ></div>

      <div className="w-full max-w-full mt-6 sm:mt-10 flex flex-col sm:flex-row justify-between relative z-10">
        {/* left section */}
        <div className="flex w-full sm:w-[60%] md:w-[50%]">
          <img src={drop3} alt="drop1" className="hidden sm:block" />
          <div className="flex flex-col gap-4">
            <div className="flex pl-4">
              <h2
                className={`head-feature text-xl sm:text-2xl ${
                  theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                }`}
              >
                Secure All Data
              </h2>
            </div>
            {security.map((secure) => (
              <div key={secure.id} className="flex items-center gap-2 mb-3">
                <div className="flex items-top pl-4 h-12">
                  <img
                    src={secure.src}
                    alt="check"
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  />
                </div>
                <p
                  className={`subheading text-left text-sm sm:text-base max-w-[90%] ${
                    theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
                  }`}
                >
                  {secure.point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex relative justify-center mt-10 sm:mt-0 sm:mr-4 md:mr-10">
          <img src={img3} alt="img1" className="max-w-full h-auto" />

          {/* Email Box */}
          <div
            className={`absolute top-0 right-0 sm:top-32 sm:-left-16 md:top-32 md:-left-28 w-36 sm:w-44 rounded-lg p-2 sm:p-3 text-left backdrop-blur-md ${
              theme === "dark"
                ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15"
                : "border border-gray-300 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] shadow-md"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                <span>
                  <img src={email} alt="email" className="w-full h-full" />
                </span>
              </div>
              <div>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-[#CAC6DD]" : "text-gray-700"
                  }`}
                >
                  Email address
                </p>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-[#CAC6DD]" : "text-gray-600"
                  }`}
                >
                  nija@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Username Box */}
          <div
            className={`absolute bottom-0 left-0 sm:top-64 sm:left-4 md:top-[77%] md:left-0 w-36 sm:w-44 rounded-lg p-2 sm:p-3 text-left backdrop-blur-md h-15 ${
              theme === "dark"
                ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15"
                : "border border-gray-300 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] shadow-md"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                <span>
                  <img src={user} alt="user" className="w-full h-full" />
                </span>
              </div>
              <div>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-[#CAC6DD]" : "text-gray-700"
                  }`}
                >
                  User name
                </p>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-[#CAC6DD]" : "text-gray-600"
                  }`}
                >
                  tufayel nija
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
