const User = require("../models/user");

const handleUser = async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    res.status(200).json({ success: true, message: "user added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding User", error: error });
  }
};

const handleshowUser = async (req, res) => {
  try {
    const user = await User.find({});
    if (user.length === 0) {
      return res.status(404).json({ message: "No user found", success: false });
    }
    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving User", error: error.message });
  }
};

module.exports = {
  handleUser,
  handleshowUser,
};
