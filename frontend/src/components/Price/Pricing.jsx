import React, { useContext, useEffect, useState } from "react";
import universe from "../../assets/universe.svg";
import { motion } from "framer-motion";
import BackgroundImg from "../BackgroundImg";
import PriceCard from "./PriceCard";
import { fetchPrice } from "../../apis/price";
import GradientLabel from "../GradientLabel";
import { themeContext } from "../../context/context";

const Pricing = () => {

  const {theme}=useContext(themeContext)

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
      className={`w-full flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 pt-60 pb-20 ${theme === 'dark'? 'bg-black' :'bg-white'}`}
    >
      {/* Background img */}
      {theme==='dark'?<BackgroundImg/>:""}
      
      
      <div className="absolute inset-0 z-0 backdrop-blur-2xl " />

      {/* header */}
      <div className="relative z-20 w-full max-w-[88.5%] mx-auto text-center">
        <motion.div {...floatAnim} className="absolute right-0 -top-[18%] md:-right-[5%] md:-top-[35%]">
          <img className="h-80 w-80" src={universe} alt="universe" />
        </motion.div>
        <div className="mx-auto flex flex-col items-center">

          {/* Gradient label */}
           <GradientLabel text ="Pricing"/>

          <div className={`heading mt-2 w-96 text-4xl ${theme ==='dark'?'text-[#CAD1E9]':'text-gray-700'}`}>
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
