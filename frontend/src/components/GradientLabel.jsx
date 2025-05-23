import React from "react";
import { themeContext } from "../context/context";
import { useContext } from "react";
const GradientLabel = ({ text }) => {

  const { theme } = useContext(themeContext);

  return (
    <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-36 shadow-sm shadow-purple-500/40">
      <div className={`bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9] ${theme ==='dark'?'bg-black text-[#CAD1E9]'
        :"bg-white text-gray-700"}`}>
        {text}
      </div>
    </div>
  );
};

export default GradientLabel;
