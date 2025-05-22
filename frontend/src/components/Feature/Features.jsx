import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundImg from "../BackgroundImg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full pt-20 sm:pt-10 lg:pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 lg:mt-60 md:mt-40 sm:mt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Background img */}
      <BackgroundImg />

      {/* header */}
      <div className="relative w-[85.2%] z-20 max-w-[88.5%] mx-auto text-center flex flex-col justify-center items-center">
        <div className="relative w-full sm:w-[60%] md:w-[50%] lg:w-[33%] z-20 max-w-3xl mx-auto px-4 text-center flex flex-col justify-center items-center">
          <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-32 shadow-sm shadow-purple-500/40">
            <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
              Features
            </div>
          </div>
          <div className="heading mt-2 text-[#CAD1E9] w-full text-2xl sm:text-3xl md:text-4xl">
            <h2>
              Why{" "}
              <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
                choose
              </span>{" "}
              us
            </h2>
          </div>
          <div className="subheading mt-4 w-full">
            <p>
              We are the only service that provides all 3 services as a packaged
              service
            </p>
          </div>
        </div>

        {/* Feature main containerr  */}
        
        <Section1 />
        <Section2 />
        <Section3 />

      </div>
    </div>
  );
};

export default Features;
