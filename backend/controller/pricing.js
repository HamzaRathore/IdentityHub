const Pricing = require("../models/pricing");

const handleaddFeatureToTier = async (req, res) => {
  try {
    const { tier, feature } = req.body;

    const pricing = await Pricing.findOne({ tier });
    if (!pricing) {
      return res.status(404).json({ message: "Tier not found" });
    }

    pricing.feature.push(feature);
    await pricing.save();

    res.status(200).json({ success: true, message: "Feature added", pricing });
  } catch (error) {
    res.status(500).json({ message: "Error adding feature", error });
  }
};

const handleShowPrice = async (req, res) => {
  try {
    const price = await Pricing.find({});
    if (price.length === 0) {
      return res
        .status(404)
        .json({ message: "no price found", success: false });
    }
    res.status(200).json({ message: "Prices retrieved successfully", price });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving prices", error: error.message });
  }
};
// for dummy data
const insertInitialPricingData = async (req, res) => {
  try {
    const pricingData = [
      {
        tier: "Basic",
        price: "0",
        description: "AI chatbot, personalized recommendations",
        feature: [
          "Type of threat",
          "Online presence",
          "Access to all modules",
          "Notability",
        ],
      },
      {
        tier: "Premium",
        price: "9.99",
        description:
          "Advanced AI chatbot, priority support, analytics dashboard",
        feature: [
          "Type of threat",
          "Online presence",
          "Access to all modules",
          "Notability",
        ],
      },
      {
        tier: "Enterprise",
        price: "20.99",
        description: "AI chatbot, personalized recommendations",
        feature: [
          "Type of threat",
          "Online presence",
          "Access to all modules",
          "Notability",
        ],
      },
    ];

    await Pricing.insertMany(pricingData);
    res
      .status(201)
      .json({ success: true, message: "Initial pricing data inserted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  handleaddFeatureToTier,
  handleShowPrice,
  insertInitialPricingData,
};
