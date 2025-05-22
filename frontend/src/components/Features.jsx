import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { personalInfo, detail, security, grid } from "../constants";
import drop1 from "../assets/features/drop1.svg";
import drop2 from "../assets/features/drop2.svg";
import drop3 from "../assets/features/drop3.svg";
import img1 from "../assets/features/img1.svg";
import img3 from "../assets/features/img3.svg";
import email from "../assets/banner/mail.svg";
import user from "../assets/banner/user.svg";

const Features = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/get");
        setUserData(res.data.user[0]);
      } catch (error) {
        console.log("error fetching user", error);
      }
    };
    fetchuser();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full pt-20 sm:pt-10 lg:pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 lg:mt-60 md:mt-40 sm:mt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Background img */}
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
      {/* header */}
      <div className="relative w-[85.2%] z-20 max-w-[88.5%] mx-auto text-center flex flex-col justify-center items-center">
        <div className="relative w-full sm:w-[60%] md:w-[50%] lg:w-[33%] z-20 max-w-3xl mx-auto px-4 text-center flex flex-col justify-center items-center">
         
          <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-32 shadow-sm shadow-purple-500/40">
            <div className="bg-black rounded-2xl px-1 py-1 text-[12px] font-medium text-[#CAD1E9]">
              Features
            </div>
          </div>
          <div className="heading mt-2 text-[#CAD1E9] w-full text-2xl sm:text-3xl md:text-4xl">
            <h2>
              Why{" "}
              <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
                choose
              </span>{" "}
              us
            </h2>
          </div>
          <div className="subheading mt-4 w-full">
            <p>
              We are the only service that provides all 3 services as a packaged
              service
            </p>
          </div>
        </div>

        {/* Feature main container  */}
        {/* Container 1 */}
        <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] backdrop-blur-[16px] border border-white/10 rounded-2xl shadow-xl"></div>
          <div className="w-full max-w-full flex flex-col sm:flex-row justify-between relative z-10">
            {/* left section */}
            <div className="flex w-full sm:w-[60%] md:w-[60%]">
              <img src={drop1} alt="drop1" className="hidden sm:block" />
              <div className="flex flex-col gap-4">
                <div className="flex pl-4">
                  <h2 className="head-feature text-xl sm:text-2xl">
                    Protect Personal information
                  </h2>
                </div>
                {personalInfo.map((info) => (
                  <div key={info.id} className="flex items-center gap-2 mb-3">
                    <div className="flex items-top pl-4 h-12">
                      <img
                        src={info.src}
                        alt="check"
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      />
                    </div>
                    <p className="subheading text-left text-sm sm:text-base max-w-[80%]">
                      {info.point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right section */}
            <div className="flex justify-center items-center mt-6 sm:mt-0 sm:pr-5">
              <img
                src={img1}
                alt="img1"
                className="max-w-full sm:max-w-none h-auto"
              />
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] backdrop-blur-[16px] border border-white/10 rounded-2xl shadow-xl"></div>
          <div className="w-full max-w-full mt-6 sm:mt-10 flex flex-col sm:flex-row justify-between relative z-10">
            {/* left section */}
            <div className="flex w-full sm:w-[60%] md:w-[50%]">
              <img src={drop2} alt="drop2" className="hidden sm:block" />
              <div className="flex flex-col gap-4">
                <div className="flex pl-4">
                  <h2 className="head-feature text-xl sm:text-2xl">
                    Detailed Reporting
                  </h2>
                </div>
                {detail.map((details) => (
                  <div
                    key={details.id}
                    className="flex items-center gap-2 mb-3"
                  >
                    <div className="flex items-top pl-4 h-12">
                      <img
                        src={details.src}
                        alt="check"
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      />
                    </div>
                    <p className="subheading text-left text-sm sm:text-base max-w-[90%]">
                      {details.point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right section */}
            <div className="flex w-full sm:w-[40%] items-center justify-center mt-6 sm:mt-0 md:pl-13">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-4">
                {grid.map((item) => (
                  <div
                    key={item.id}
                    className="relative w-full sm:w-auto rounded-lg border border-white/10 p-2 sm:p-4 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                        <span className="text-[#CAC6DD]">
                          <img
                            src={item.src}
                            alt="icon"
                            className="w-full h-full"
                          />
                        </span>
                      </div>
                      <div>
                        <p className="text-sm md:text-xs text-[#CAC6DD]">
                          {item.title}
                        </p>
                        <p className="text-xs  md:text-sm text-[#CAC6DD]">
                          {item.point}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Container 3 */}
        <div className="w-full h-auto mt-6 p-4 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffffff1a] to-[#ffffff0a] backdrop-blur-[16px] border border-white/10 rounded-2xl shadow-xl"></div>
          <div className="w-full max-w-full mt-6 sm:mt-10 flex flex-col sm:flex-row justify-between relative z-10">
            {/* left section */}
            <div className="flex w-full sm:w-[60%] md:w-[50%]">
              <img src={drop3} alt="drop1" className="hidden sm:block" />
              <div className="flex flex-col gap-4">
                <div className="flex pl-4">
                  <h2 className="head-feature text-xl sm:text-2xl">
                    Secure All Data
                  </h2>
                </div>
                {security.map((secure) => (
                  <div key={secure.id} className="flex items-center gap-2 mb-3">
                    <div className="flex items-top pl-4 h-12">
                      <img
                        src={secure.src}
                        alt="check"
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      />
                    </div>
                    <p className="subheading text-left text-sm sm:text-base max-w-[90%]">
                      {secure.point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right section */}
            <div className="flex relative justify-center mt-10 sm:mt-0 sm:mr-4 md:mr-10">
              <img src={img3} alt="img1" className="max-w-full h-auto" />

              {/* Email */}
              <div className="absolute top-0 right-0 sm:top-32 sm:-left-16 md:top-32 md:-left-28 w-36 sm:w-44 rounded-lg border border-white/10 p-2 sm:p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    <span className="text-[#CAC6DD]">
                      <img src={email} alt="email" className="w-full h-full" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#CAC6DD]">Email address</p>
                    <p className="text-xs text-[#CAC6DD]">nija@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Username */}
              <div className="absolute bottom-0 left-0 sm:top-64 sm:left-4 md:top-[77%] md:left-0 w-36 sm:w-44 rounded-lg border border-white/10 p-2 sm:p-3 text-left bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/15 backdrop-blur-md h-15">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                    <span className="text-[#CAC6DD]">
                      <img src={user} alt="user" className="w-full h-full" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#CAC6DD]">User name</p>
                    <p className="text-xs text-[#CAC6DD] ">tufayel nija</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
