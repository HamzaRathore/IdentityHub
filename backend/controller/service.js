const Services = require("../models/service");

const handleService = async (req, res) => {
  try {
    const data = req.body;
    const service = new Services(data);
    await service.save();
    res
      .status(200)
      .json({ success: true, message: "service added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding service", error: error });
  }
};

const handleShowService = async (req, res) => {
  try {
    const service = await Services.find({});
    if (service.length === 0) {
      return res
        .status(404)
        .json({ message: "no service found", success: false });
    }
    res
      .status(200)
      .json({ message: "Services retrieved successfully", service });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving Services", error: error.message });
  }
};

module.exports = {
  handleService,
  handleShowService,
};
