import React from 'react'
import { motion } from "framer-motion";
import planets from "../assets/planets2.svg";
const PlanetsSection = () => {

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

  return (
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
  )
}

export default PlanetsSection
