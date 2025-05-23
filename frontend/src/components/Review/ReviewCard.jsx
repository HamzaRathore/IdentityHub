import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { themeContext } from "../../context/context";
const ReviewCard = ({
  goToPrevious,
  goToNext,
  currentReview,
  currentIndex,
  loading,
  reviews,
}) => {
  const {theme}=useContext(themeContext)
  return (
    <div className={`w-full h-[500px] md:h-[350px] relative max-w-7xl mx-auto bg-gradient-to-r from-[#000000] to-[#424353] backdrop-blur-[16px] border border-white/10 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mt-6 sm:mt-10 ${theme ==='dark'?'bg-gradient-to-r from-[#000000] to-[#424353]':'bg-gradient-to-r from-[#090EDB] to-[#E73DC4]'}`}>
      {/* Prev button */}
      <button
        onClick={goToPrevious}
        className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#090EDB] to-[#E73DC4] absolute -left-5 md:-left-5 top-[50%] transform -translate-y-1/2 hover:cursor-pointer"
      >
        <FaAngleLeft />
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#090EDB] to-[#E73DC4] absolute -right-5 top-[50%] transform -translate-y-1/2 hover:cursor-pointer"
      >
        <FaAngleRight />
      </button>

       <div className={` rounded-xl p-4 sm:p-6 h-full ${theme === 'dark'?'bg-gradient-to-r from-[#0f0f13] to-[#292a38]':'bg-white'}`}>
        {/* Review */}
        
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
          <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col text-left">
            <h3 className={`heading text-sm sm:text-base ${theme === 'dark'?'text-white':'text-black'}`}>
              {currentReview.name}
            </h3>
            <p className={`subheading  md:text-lg sm:text-sm ${theme === 'dark'?'text-[#9D9BA6]':'text-gray-600'}`}>
              {currentReview.type} •{" "}
              {(() => {
                const reviewTime = new Date(currentReview.time);
                const now = Date.now();
                const diffInMs = now - reviewTime.getTime();
                const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
                return `${diffInDays.toFixed(1)} days ago`;
              })()}
            </p>
            <p className={`subheading  md:text-lg sm:text-sm mt-2 md:mt-3 ${theme === 'dark'?'text-[#CAC6DD]':'text-gray-600'}`}>
              {currentReview.description}
            </p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              {index === currentIndex ? (
                <div
                  className="absolute -inset-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(to right, #090EDB, #E73DC4)",
                    padding: "2px",
                  }}
                >
                  <div className="h-full w-full rounded-full bg-gray-900"></div>
                </div>
              ) : null}
              <div
                className={`h-1.5 w-1.5 rounded-full z-10 ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
