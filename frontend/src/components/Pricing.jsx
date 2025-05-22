import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import check from "../assets/features/check2.svg";
import universe from "../assets/universe.svg";
import { motion } from "framer-motion";

const Pricing = () => {

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

  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get("http://localhost:3000/price/get");
        setPricingData(res.data.price);
      } catch (error) {
        console.log("error fetching prices", error);
      }
    };
    fetchPrice();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const orderedData = [];
  const enterprise = pricingData.find(
    (item) => item.tier.toLowerCase() === "enterprise"
  );
  const basic = pricingData.find(
    (item) => item.tier.toLowerCase() === "basic"
  );
  const premium = pricingData.find(
    (item) => item.tier.toLowerCase() === "premium"
  );

  if (basic) orderedData.push(basic);
  if (premium) orderedData.push(premium);
  if (enterprise) orderedData.push(enterprise);

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 pt-60 mb-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
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
      
      <div className="absolute inset-0 z-0 backdrop-blur-2xl bg-black/10" />

      {/* header */}
      <div className="relative z-20 w-full max-w-[88.5%] mx-auto text-center">
        <motion.div {...floatAnim} className="absolute right-0 -top-[18%] md:-right-[5%] md:-top-[35%]">
          <img className="h-80 w-80" src={universe} alt="universe" />
        </motion.div>
        <div className="mx-auto flex flex-col items-center">
          <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-32 shadow-sm shadow-purple-500/40">
            <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
              Pricing
            </div>
          </div>
          <div className="heading mt-2 text-[#CAD1E9] w-96 text-4xl">
            <h2>
              Our{" "}
              <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
                Pricing
              </span>{" "}
              Package
            </h2>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-16 w-[90%] max-w-5xl mx-auto ">
          {orderedData.map((item, index) => (
            <div
              key={item._id || index}
              className={`relative bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.05] hover:z-20 ${
                index === 1
                  ? "p-8 scale-[1.1] w-full md:w-[105%] z-10"
                  : "p-7 mt-6 scale-[1.05] w-full md:w-[100%]"
              }`}
            >
              {/* Card header  */}
              <div>
                <h3 className="heading text-2xl font-bold text-white mb-1 text-left">
                  {item.tier}
                </h3>
                <p className="subheading text-sm text-gray-300 mb-3 text-left">
                  {item.description}
                </p>
                <div className="heading flex item-center mb-4">
                  <span className="text-2xl text-white pt-4">$</span>
                  <span className="text-6xl font-bold text-white">{item.price}</span>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-6 mt-4 ">
                <button className="w-full py-3 rounded-xl font-medium border border-purple-500/50 text-white hover:bg-gradient-to-r from-[#090EDB] to-[#DA24BB] hover:cursor-pointer ">
                  Get Started
                </button>

                {/* Features  */}
                <div className="space-y-3">
                  {item.feature &&
                    item.feature.map((f, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center">
                            <img src={check} alt="check" />
                          </div>
                          <span className="text-sm text-gray-300">{f}</span>
                        </div>
                        {idx < item.feature.length - 1 && (
                          <hr className="border-t border-white/10 mt-2" />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
