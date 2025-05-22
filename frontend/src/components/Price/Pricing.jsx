import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import universe from "../../assets/universe.svg";
import { motion } from "framer-motion";
import BackgroundImg from "../BackgroundImg";
import PriceCard from "./PriceCard";
import { fetchPrice } from "../../apis/price";

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
    const getPrice = async () => {
      try {
        const priceData=await fetchPrice();
        setPricingData(priceData)
      } catch (error) {
        console.log("error fetching prices", error);
      }
    };
    getPrice();
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
      {/* Background img */}
      <BackgroundImg/>
      
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
        <PriceCard orderedData={orderedData}/>
      </div>
    </div>
  );
};

export default Pricing;
