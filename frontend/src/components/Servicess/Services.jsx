import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";

const Services = () => {  
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full pt-20 md:pt-0 lg:pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 md:mt-40 "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Content container */}
      <div className="relative w-[40%] z-20 max-w-5xl mx-auto px-4 text-center flex flex-col justify-center items-center ">
        
        <div className="p-[1px]  bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-32 shadow-sm shadow-purple-500/40">
          <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
            Services
          </div>
        </div>
        <div className=" heading mt-2 text-[#CAD1E9]  w-97 text-4xl">
          <h2>
            See our services for secure your{" "}
            <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
              Data
            </span>
          </h2>
        </div>
        <div className="subheading mt-4 w-72 md:w-[85%] lg:w-[90%] ">
          <p>
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
        </div>
      </div>

      {/* Cards */}
       <Card/>
    </div>
  );
};

export default Services;
