import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchUser } from "../../apis/user";
import credit from "../../assets/banner/credit.svg";
import email from "../../assets/banner/email.svg";
import number from "../../assets/banner/number.svg";
import passcode from "../../assets/banner/passcode.svg";
import Productive from "../../assets/productivity.png";
import { themeContext } from "./../../context/context";
import { useContext } from "react";

const Productivity = () => {
  const { theme } = useContext(themeContext);

  const floatAnim = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.log("Failed to fetch user");
      }
    };
    getUser();
  }, []);

  return (
    <motion.div
      {...floatAnim}
      className="relative w-full max-w-2xl mx-auto mb-8 flex flex-col items-center md:block gap-4"
    >
      <div
        className={`
    relative md:absolute md:top-2 md:left-2 sm:-top-4 sm:-left-4 w-44 rounded-lg p-3 text-left backdrop-blur-md
    ${
      theme === "dark"
        ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 text-white"
        : "border border-gray-300 bg-gray-100 text-gray-800 shadow-md"
    }
  `}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={passcode} alt="passcode" />
            </span>
          </div>
          <div
            className={`${
              theme === "dark" ? "text-[#CAC6DD]" : "text-gray-800"
            }`}
          >
            <p className="text-xs ">One-time passcode</p>
            <p className="text-sm ">{user ? user.passcode : "...Loading"}</p>
          </div>
        </div>
      </div>

      {/* Top Right box */}
      <div
        className={`relative md:absolute md:top-2 md:right-2 sm:-top-4 sm:-right-4 w-44 rounded-lg border  p-3 text-left  backdrop-blur-md
        ${
          theme === "dark"
            ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 text-white"
            : "border border-gray-300 bg-gray-100 text-gray-800 shadow-md"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-[#CAC6DD]">
              <img src={number} alt="number" />
            </span>
          </div>
          <div
            className={`${
              theme === "dark" ? "text-[#CAC6DD]" : "text-gray-800"
            }`}
          >
            <p className="text-xs ">Phone numbers</p>
            <p className="text-xs ">{user ? user.number : "...Loading"}</p>
          </div>
        </div>
      </div>

      {/* Productivity Image */}
      <div className="relative w-60 h-60  sm:h-64 md:w-96 md:h-80 mx-auto">
        <img
          src={Productive}
          alt="Productivity"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom Left box */}
      <div
        className={`relative md:absolute md:bottom-2 md:left-2 sm:-bottom-4 sm:-left-4  w-44 rounded-lg border  p-3 text-left  backdrop-blur-md   ${
          theme === "dark"
            ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 text-white"
            : "border border-gray-300 bg-gray-100 text-gray-800 shadow-md"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={credit} alt="credit" />
            </span>
          </div>
          <div
            className={`${
              theme === "dark" ? "text-[#CAC6DD]" : "text-gray-800"
            }`}
          >
            <p className="text-xs">Credit Card</p>
            <p className="text-sm">{user ? user.card : "...Loading"}</p>
          </div>
        </div>
      </div>

      {/* Bottom right box */}
      <div
        className={`relative md:absolute md:bottom-2 md:right-2 sm:-bottom-4 sm:-right-4 w-44 rounded-lg border p-3 text-left backdrop-blur-md  ${
          theme === "dark"
            ? "border border-white/10 bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 text-white"
            : "border border-gray-300 bg-gray-100 text-gray-800 shadow-md"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={email} alt="email" />
            </span>
          </div>
          <div
            className={`${
              theme === "dark" ? "text-[#CAC6DD]" : "text-gray-800"
            }`}
          >
            <p className="text-xs">Email address</p>
            <p className="text-sm">{user ? user.email : "...Loading"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Productivity;
