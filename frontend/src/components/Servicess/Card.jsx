import { useContext, useEffect, useState } from "react";
import img1 from "../../assets/servicess/img1.svg";
import img2 from "../../assets/servicess/img2.svg";
import img3 from "../../assets/servicess/img3.svg";
import gradient from "../../assets/servicess/service-gradient.png";
import arrow from "../../assets/servicess/arrow-right.svg";
import card from "../../assets/Card.svg";
import { fetchService } from "../../apis/service";
import { themeContext } from "../../context/context";
const Card = () => {

  const {theme} = useContext(themeContext);
    
  const images = [img1, img2, img3];
  const [service, setService] = useState(null);

  useEffect(() => {
    const getService = async () => {
      try {
        const serviceData = await fetchService();
        setService(serviceData);
      } catch (error) {
        console.log("failed to fetch services");
      }
    };
    getService();
  }, []);

  return (
    <div className="flex px-8 md:px-0 lg:px-0 gap-10 mt-14  flex-wrap justify-center">
      {service &&
        service.map((item, index) => (
          <div className={`relative ${theme === 'light' ? 'border-2 border-black rounded-2xl shadow-xl' : ''}`} key={index}>
            <img src={card} className={`${theme === 'light' ? 'brightness-0 invert' : ''}`} alt="card" />
            <div className="absolute w-[85%] h-80  top-8 left-8 px-4 md:py-6 ">
              <div className="flex flex-col relative z-10">
                
                <img
                  className="absolute left-[25%] -top-10 opacity-60 z-0"
                  src={gradient}
                  alt="gradient"
                />
                <img
                  className="w-12 h-12 z-10"
                  src={images[index % images.length]}
                  alt="service"
                />
                <h3 className={`inter text-2xl pt-4 z-10 h-22 ${theme==='dark'?'text-[#D6DDF8]':'text-gray-800'}`}>
                  {item.heading}
                </h3>
                <p className={`inter text-sm pt-2  z-10 ${theme==='dark'?'text-[#CAC6DD]':'text-gray-800'}`}>
                  {item.description}
                </p>
                <button className={`inter w-36 h-11 text-left text-lg flex items-center gap-2 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] hover:text-white hover:cursor-pointer z-10 ${theme==='dark' ?'text-white':'text-black'}`}>
                  Explore More
                  <span className={`${theme==='dark' ?'text-white':'text-black'}`} >
                    <img src={arrow} alt="right arrow" className={`w-4 h-4 ${theme === 'light' ? 'invert' : ''}`}/>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
