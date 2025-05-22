import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import card from "../assets/Card.svg";
import img1 from "../assets/servicess/img1.svg";
import img2 from "../assets/servicess/img2.svg";
import img3 from "../assets/servicess/img3.svg";
import gradient from "../assets/servicess/service-gradient.png";
import arrow from "../assets/servicess/arrow-right.svg";

const Services = () => {
  const [service, setService] = useState(null);
  const images = [img1, img2, img3];

  useEffect(() => {
    const fetchservice = async () => {
      try {
        const res = await axios.get("http://localhost:3000/service/get");
        setService(res.data.service);
      } catch (error) {
        console.log("error fetching services", error);
      }
    };
    fetchservice();
  }, []);

  
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
      <div className="flex px-8 md:px-0 lg:px-0 gap-10 mt-14  flex-wrap justify-center">
        {service &&
          service.map((item, index) => (
            <div className="relative" key={index}>
              <img src={card} alt="card" />
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
                  <h3 className="inter text-2xl pt-4 text-[#D6DDF8] z-10">
                    {item.heading}
                  </h3>
                  <p className="inter text-sm pt-2 text-[#CAC6DD] z-10">
                    {item.description}
                  </p>
                  <button className="inter w-36 h-11 text-left text-lg flex items-center gap-2 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] hover:text-white hover:cursor-pointer z-10">
                    Explore More
                    <span>
                      <img src={arrow} alt="right arrow" className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
