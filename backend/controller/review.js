const Review = require("../models/review");

const handleReview = async (req, res) => {
  try {
    const data = req.body;

    const reviews = new Review(data);
    await reviews.save();
    res
      .status(200)
      .json({ success: true, message: "review added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error: error });
  }
};

const handleShowReview = async (req, res) => {
  try {
    const review = await Review.find({});
    if (review.length === 0) {
      return res
        .status(404)
        .json({ message: "no reviews found", success: false });
    }
    res.status(200).json({ message: "Reviews retrieved successfully", review });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving reviews", error: error.message });
  }
};

module.exports = {
  handleReview,
  handleShowReview,
};
