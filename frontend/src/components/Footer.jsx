import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import telegram from "../assets/footer/telegram.svg";
import twitter from "../assets/footer/twitter.svg";
const Footer = () => {
  return (
    <div>
      <footer className="w-full -mt-60 md:-mt-0 lg:-mt-0 py-6 px-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center pb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="IdentityHub Logo" className="mr-2" />
          </div>

          <div className="flex gap-8 md:gap-20 mb-4 md:mb-2 hover:underline hover:cursor-pointer md:pr-14">
            <Link
              href="#"
              className="heading text-sm text-[#CAC6DD] hover:text-white hover:underline hover:cursor-pointer"
            >
              FEATURES
            </Link>
            <Link
              href="#"
              className="heading text-sm text-[#CAC6DD] hover:text-white"
            >
              SERVICES
            </Link>
            <Link
              href="#"
              className="heading text-sm text-[#CAC6DD] hover:text-white"
            >
              PRICING
            </Link>
            <Link
              href="#"
              className="heading text-sm text-[#CAC6DD] hover:text-white"
            >
              HOW TO USE
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 relative z-10 flex flex-col md:flex-row justify-between items-center ">
          <div className="mt-4 text-xs text-[#CAC6DD]">
            © IdentityHub 2024. All rights reserved
          </div>

          <div className="flex mt-4 gap-4 md:gap-8 hover:cursor-pointer">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={telegram} alt="telegram" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
