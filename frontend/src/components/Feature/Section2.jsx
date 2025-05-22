import { detail, grid } from "../../constants";
import drop2 from "../../assets/features/drop2.svg";

const Section2 = () => {
  return (
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
              <div key={details.id} className="flex items-center gap-2 mb-3">
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
  );
};

export default Section2;
