import { useEffect, useState } from "react";
import axios from "axios";
import planets from "../assets/planets.svg";
import productivity from "../assets/productivity.png";
import credit from "../assets/banner/credit.svg";
import email from "../assets/banner/email.svg";
import number from "../assets/banner/number.svg";
import passcode from "../assets/banner/passcode.svg";
import circle from "../assets/circle.png";
import bar from "../assets/bar.svg";
import { motion } from "framer-motion";

const Banner = () => {

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

const [user,setUser]=useState(null);
const API_URL = "http://localhost:3000/user/get";

useEffect(() => {
  
const fetchuser=async()=>{
  try {
    const res=await axios.get(API_URL);
    setUser(res.data.user[0]);
  } catch (error) {
    console.log("error fetching user",error);
    
  }
};
fetchuser();
  
  
}, [])


  return (
    <div className="relative w-full pt-36 md:pt-36 lg:pt-36 flex items-center justify-center bg-black overflow-visible">
      
      {/* Background img */}
      <div
        className="absolute overflow-visible inset-0 w-full h-[150%] bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/gradient.png')",
          opacity: "0.3",
          backgroundPosition: "center top -150px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
      {/* Circle Image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <img
          src={circle}
          alt="Circle background"
          className="opacity-90 h-[100%] md:h-[150%] w-[100%] pr-8 md:pt-40"
        />
      </div>

      {/* Planets SVG */}
      <motion.div {...floatAnim} className="absolute inset-0 w-full h-full z-10">
        <img
          src={planets}
          alt="Planets background"
          style={{
            objectFit: "cover",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          priority
        />
      </motion.div>

      {/* Content container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center flex flex-col justify-center items-center">
        
        <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-36 shadow-sm shadow-purple-500/40">
          <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
            Secure your data
          </div>
        </div>

        {/* Main heading with gradient */}
        <div className="relative text-center mb-6">
          <h1 className="heading text-3xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-2">
            <span
              style={{
                background: "linear-gradient(to bottom, #F33CC0 0%, #F33CC0 50%, #4349FF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Identity-hub is a better way to
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(to bottom, #4349FF 0%, #4349FF 50%, #F33CC0 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              achieve 
            </span >
            <span style={{
                background: "linear-gradient(to bottom, #F33CC0 0%, #4349FF 50%, #4349FF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}> privacy</span>
            
          </h1>

          {/* Bar img */}
          <img
            src={bar}
            alt="Colorful bar"
            className="mt-2 md:mr-44 lg:mr-44 mx-auto"
          />
        </div>

        {/* Description */}
        <p className="subheading text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-xl lg:text-xl">
          Make your data invisible by generating unlimited identities. The
          next-level in privacy protection for online and travel.
        </p>

        {/* Buttons */}
        <div className="flex flex-row  gap-4 justify-center mb-16">
          <button className="w-36 h-10 relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] p-[1px] hover:cursor-pointer">
            <span className="relative block bg-gray-900 px-4 py-2 rounded-xl text-[#D9D9D9] text-sm transition-all duration-300 group-hover:bg-opacity-50">
              Start Free Trial
            </span>
          </button>
          <button className="w-36 h-10 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] text-[#D9D9D9] text-sm flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:cursor-pointer">
            Use it Now
          </button>
        </div>

        {/* Productivity Section */}
        <motion.div {...floatAnim} className="relative w-full max-w-2xl mx-auto mb-8 flex flex-col items-center md:block gap-4">
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
                <p className="text-sm text-[#CAC6DD]">{user?user.passcode:"...Loading"}</p>
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
                <p className="text-xs text-[#CAC6DD]">{user?user.number:"...Loading"}</p>
              </div>
            </div>
          </div>

          {/* Productivity Image */}
          <div className="relative w-60 h-60  sm:h-64 md:w-96 md:h-80 mx-auto">
            <img
              src={productivity}
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
                <p className="text-sm text-[#CAC6DD]">{user?user.card:"...Loading"}</p>
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
                <p className="text-sm text-[#CAC6DD]">{user?user.email:"...Loading"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
