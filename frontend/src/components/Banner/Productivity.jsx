import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchUser } from "../../apis/user";
import credit from "../../assets/banner/credit.svg";
import email from "../../assets/banner/email.svg";
import number from "../../assets/banner/number.svg";
import passcode from "../../assets/banner/passcode.svg";
import Productive from "../../assets/productivity.png";

const Productivity = () => {
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
      {/* Top left box */}
      <div className="relative md:absolute md:top-2 md:left-2 sm:-top-4 sm:-left-4 w-44 rounded-lg border border-white/10 p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={passcode} alt="passcode" />
            </span>
          </div>
          <div>
            <p className="text-xs text-[#CAC6DD]">One-time passcode</p>
            <p className="text-sm text-[#CAC6DD]">
              {user ? user.passcode : "...Loading"}
            </p>
          </div>
        </div>
      </div>

      {/* Top Right box */}
      <div className="relative md:absolute md:top-2 md:right-2 sm:-top-4 sm:-right-4 w-44 rounded-lg border border-white/10 p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-[#CAC6DD]">
              <img src={number} alt="number" />
            </span>
          </div>
          <div>
            <p className="text-xs text-[#CAC6DD]">Phone numbers</p>
            <p className="text-xs text-[#CAC6DD]">
              {user ? user.number : "...Loading"}
            </p>
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
      <div className="relative md:absolute md:bottom-2 md:left-2 sm:-bottom-4 sm:-left-4  w-44 rounded-lg border border-white/10 p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={credit} alt="credit" />
            </span>
          </div>
          <div>
            <p className="text-xs text-[#CAC6DD]">Credit Card</p>
            <p className="text-sm text-[#CAC6DD]">
              {user ? user.card : "...Loading"}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom right box */}
      <div className="relative md:absolute md:bottom-2 md:right-2 sm:-bottom-4 sm:-right-4  w-44 rounded-lg border border-white/10 p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-xs">
              <img src={email} alt="email" />
            </span>
          </div>
          <div>
            <p className="text-xs text-[#CAC6DD]">Email address</p>
            <p className="text-sm text-[#CAC6DD]">
              {user ? user.email : "...Loading"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Productivity;
