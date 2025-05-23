import { useContext } from "react";
import { themeContext } from "../../context/context"; 
import check from "../../assets/features/check2.svg";

const PriceCard = ({ orderedData }) => {
  const {theme} = useContext(themeContext);  

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-16 w-[90%] max-w-5xl mx-auto">
      {orderedData.map((item, index) => (
        <div
          key={item._id || index}
          className={`relative rounded-3xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.05] hover:z-20
            ${
              index === 1
                ? "p-8 scale-[1.1] w-full md:w-[105%] z-10"
                : "p-7 mt-6 scale-[1.05] w-full md:w-[100%]"
            }
            ${
              theme === "dark"
                ? "bg-black/20 backdrop-blur-md border border-white/10 text-white"
                : "bg-white/60 backdrop-blur-md border border-gray-300 shadow-md text-gray-900"
            }
          `}
        >
          {/* Card header */}
          <div>
            <h3 className="heading text-2xl font-bold mb-1 text-left">
              {item.tier}
            </h3>
            <p
              className={`subheading text-sm mb-3 text-left ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.description}
            </p>
            <div className="heading flex items-center mb-4">
              <span className="text-2xl pt-4">$
              </span>
              <span className="text-6xl font-bold">{item.price}</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-6 mt-4">
            <button className={`w-full py-3 rounded-xl font-medium border border-purple-500/50 text-white hover:bg-gradient-to-r from-[#090EDB] to-[#DA24BB] hover:cursor-pointer ${theme==='light'?'border border-purple-500/50 text-white bg-gradient-to-r from-[#090EDB] to-[#DA24BB]':""}`}>
              Get Started
            </button>

            {/* Features */}
            <div className="space-y-3">
              {item.feature &&
                item.feature.map((f, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <img src={check} alt="check" />
                      </div>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {f}
                      </span>
                    </div>
                    {idx < item.feature.length - 1 && (
                      <hr
                        className={`mt-2 ${
                          theme === "dark"
                            ? "border-white/10"
                            : "border-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
