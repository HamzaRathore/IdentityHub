import React from "react";

const GradientLabel = ({ text }) => {
  return (
     <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-36 shadow-sm shadow-purple-500/40">
          <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
        {text}
      </div>
    </div>
  );
};

export default GradientLabel;