import { Link } from "react-router-dom";
import logo from "../../assets/logoo.svg";
import { socialIcons } from "../../constants";
import { useContext } from "react";
import { themeContext } from "../../context/context";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  const footerLinks = [
    t("footer.features"),
    t("footer.services"),
    t("footer.pricing"),
    t("footer.howToUse"),
  ];

  return (
    <div>
      <footer
        className={`w-full -mt-60 md:-mt-0 lg:-mt-0 py-6 px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center pb-4">
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
                  theme === "dark" ? "text-[#CAD1E9]" : "text-gray-800"
                }`}
              >
                IdentityHub
              </h3>
            </span>
          </div>

          <div className="flex gap-8 md:gap-20 mb-4 md:mb-2 hover:underline hover:cursor-pointer md:pr-14">
            {footerLinks.map((linkText, index) => (
              <Link
                key={index}
                to={"/"}
                className={`heading text-sm  hover:text-white hover:underline hover:cursor-pointer ${
                  theme === "dark" ? "text-[#CAC6DD]" : "text-gray-700"
                }`}
              >
                {linkText}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-800 relative z-10 flex flex-col md:flex-row justify-between items-center">
          <div
            className={`mt-4 text-xs  ${
              theme === "dark" ? "text-[#CAC6DD]" : "text-gray-800"
            }`}
          >
            {t("footer.copyright")}
          </div>

          <div className="flex mt-4 gap-4 md:gap-8 hover:cursor-pointer">
            {socialIcons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
