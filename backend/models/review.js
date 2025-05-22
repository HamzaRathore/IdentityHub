const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
