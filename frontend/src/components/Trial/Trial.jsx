import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import circle from "../../assets/circle.png";
import bar from "../../assets/bar.svg";
import pattern from "../../assets/pattern.png"
import BackgroundImg from "../BackgroundImg";

const Trial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full h-screen relative md:pt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* background gradient img */}
     <BackgroundImg/>

      {/*  circle img with rotation */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <motion.img
          src={pattern}
          alt="Circle background"
          className="opacity-90 w-[400px] h-[850px] rounded-full object-cover"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pt-32 md:pt-44 ">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className=" heading text-4xl md:text-5xl font-bold mb-2">
            Be part of the future of
          </h1>
          <div className="relative inline-block">
            <h1 className="heading text-4xl md:text-5xl font-bold">
              IdentityHub
            </h1>
            <img
              src={bar}
              alt="Colorful bar"
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            />
          </div>

          <p className="sub mt-6 text-lg max-w-lg mx-auto">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          {/* Button */}
          <button className="inter mt-8 px-6 py-3 text-white rounded-xl text-sm transition-colors duration-300 bg-gradient-to-r from-[#0d10db] to-[#DA24BB] hover:scale-105 hover:transition-all hover:duration-200 cursor-pointer">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
