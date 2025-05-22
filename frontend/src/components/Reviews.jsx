import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import avatar from "../assets/avatar.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/review/get");
        setReviews(res.data.review);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching reviews", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return (
      <div className="text-white text-center mt-20">Loading reviews...</div>
    );
  }

  if (!reviews.length) {
    return (
      <div className="text-white text-center mt-20">No reviews available.</div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 mt-20 md:mt-60 pb-20"
      ata-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="relative w-[90%] sm:w-[88.5%] max-w-[88.5%] mx-auto text-center flex flex-col justify-center items-center">
        {/* header */}
        <div className="relative w-full sm:w-[33%] max-w-3xl mx-auto px-2 sm:px-4 text-center flex flex-col justify-center items-center">
          <div className="p-[1px] bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl w-28 sm:w-32 shadow-sm shadow-purple-500/40">
            <div className="bg-black rounded-2xl px-1 py-1 text-[10px] sm:text-[12px] font-medium text-[#CAD1E9]">
              Testimonials
            </div>
          </div>
          <div className="heading mt-2 text-[#CAD1E9] w-full sm:w-97 text-2xl sm:text-4xl">
            <h2>
              What our user{" "}
              <span className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">
                says
              </span>{" "}
              about us
            </h2>
          </div>
        </div>

        {/* Review card */}
        <div className="w-full h-[500px] md:h-[350px] relative max-w-7xl mx-auto bg-gradient-to-r from-[#000000] to-[#424353] backdrop-blur-[16px] border border-white/10 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mt-6 sm:mt-10">
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

          <div className="bg-gradient-to-r from-[#0f0f13] to-[#292a38] rounded-xl p-4 sm:p-6 h-full">
            {/* Review */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
              <img
                src={avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col text-left">
                <h3 className="heading text-white text-sm sm:text-base">
                  {currentReview.name}
                </h3>
                <p className="subheading text-[#9D9BA6] md:text-lg sm:text-sm">
                  {currentReview.type} •{" "}
                  {(() => {
                    const reviewTime = new Date(currentReview.time);
                    const now = Date.now();
                    const diffInMs = now - reviewTime.getTime();
                    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
                    return `${diffInDays.toFixed(1)} days ago`;
                  })()}
                </p>
                <p className="subheading text-[#CAC6DD] md:text-lg sm:text-sm mt-2 md:mt-3">
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
                        background:
                          "linear-gradient(to right, #090EDB, #E73DC4)",
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
      </div>
    </div>
  );
};

export default Reviews;
