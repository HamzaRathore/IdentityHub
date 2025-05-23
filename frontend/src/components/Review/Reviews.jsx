import React, { useState, useEffect, useContext } from "react";
import { fetchReview } from "../../apis/review";
import ReviewCard from "./ReviewCard";
import GradientLabel from "../GradientLabel";
import { themeContext } from "../../context/context";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewData = await fetchReview();
        setReviews(reviewData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching reviews", error);
        setLoading(false);
      }
    };

    getReviews();
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
      className={`w-full flex flex-col items-center justify-center bg-transparent overflow-visible relative z-30 pt-20 md:pt-60 pb-20 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="relative w-[90%] sm:w-[88.5%] max-w-[88.5%] mx-auto text-center flex flex-col justify-center items-center">
        {/* header */}
        <div className="relative w-full sm:w-[33%] max-w-3xl mx-auto px-2 sm:px-4 text-center flex flex-col justify-center items-center">
          {/* Gradient label */}
          <GradientLabel text="Testimonials" />

          <div
            className={`heading mt-2  w-full sm:w-97 text-2xl sm:text-4xl ${
              theme === "dark" ? "text-[#CAD1E9]" : "text-gray-700"
            }`}
          >
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
        <ReviewCard
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          currentReview={currentReview}
          reviews={reviews}
          currentIndex={currentIndex}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Reviews;
