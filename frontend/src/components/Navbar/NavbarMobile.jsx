import React from "react";
import { navs } from "../../constants";

const NavbarMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] z-50 bg-gray-900/95 border border-white/10 rounded-lg backdrop-blur-3xl p-4 md:hidden">
      <div className="flex flex-col space-y-4">
        {navs.map((item) => (
          <a
            key={item.id}
            href="/"
            className="text-[#D9D9D9] hover:text-white transition-colors text-sm py-2 border-b border-white/10 last:border-0"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <button className="w-full mt-2 relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[1px]">
          <span className="relative block bg-gray-900 w-full py-2 rounded-[calc(0.5rem-1px)] text-[#D9D9D9] text-sm transition-all duration-300 group-hover:bg-opacity-50">
            Start Free Trial
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
