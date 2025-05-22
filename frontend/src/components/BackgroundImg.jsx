import React from 'react'

const BackgroundImg = () => {
  return (
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
  )
}

export default BackgroundImg
