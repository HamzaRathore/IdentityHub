import check from "../../assets/features/check2.svg";

const PriceCard = ({ orderedData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-16 w-[90%] max-w-5xl mx-auto ">
      {orderedData.map((item, index) => (
        <div
          key={item._id || index}
          className={`relative bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.05] hover:z-20 ${
            index === 1
              ? "p-8 scale-[1.1] w-full md:w-[105%] z-10"
              : "p-7 mt-6 scale-[1.05] w-full md:w-[100%]"
          }`}
        >
          {/* Card header  */}
          <div>
            <h3 className="heading text-2xl font-bold text-white mb-1 text-left">
              {item.tier}
            </h3>
            <p className="subheading text-sm text-gray-300 mb-3 text-left">
              {item.description}
            </p>
            <div className="heading flex item-center mb-4">
              <span className="text-2xl text-white pt-4">$</span>
              <span className="text-6xl font-bold text-white">
                {item.price}
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-6 mt-4 ">
            <button className="w-full py-3 rounded-xl font-medium border border-purple-500/50 text-white hover:bg-gradient-to-r from-[#090EDB] to-[#DA24BB] hover:cursor-pointer ">
              Get Started
            </button>

            {/* Features  */}
            <div className="space-y-3">
              {item.feature &&
                item.feature.map((f, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <img src={check} alt="check" />
                      </div>
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                    {idx < item.feature.length - 1 && (
                      <hr className="border-t border-white/10 mt-2" />
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
