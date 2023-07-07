const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/creatuser", async (req, res) => {
  try {
    await User.create({
      name: "taha",
      password: "abcd",
      email: "taha24@gmail.com",
      location: "karachi",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
