import React from "react";
import { navs } from "../../constants";

const NavbarDesktop = () => {
  return (
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 lg:space-x-8">
      {navs.map((item) => (
        <a
          key={item.id}
          href="/"
          className="text-[#D9D9D9] hover:text-white transition-colors text-xs sm:text-sm"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default NavbarDesktop;
