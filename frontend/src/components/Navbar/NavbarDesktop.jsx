import React, { useContext } from "react";
import { navs } from "../../constants";
import { themeContext } from "../../context/context";
import { useTranslation } from "react-i18next";

const NavbarDesktop = () => {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-8">
      {navs.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`hover:text-white transition-colors text-xs sm:text-sm ${
            theme === "dark" ? "text-[#CAD1E9]" : "text-white"
          }`}
        >
          {t(item.name)}
        </a>
      ))}
    </div>
  );
};

export default NavbarDesktop;
