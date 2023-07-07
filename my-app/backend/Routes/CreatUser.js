const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/creatuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);
router.post("/loginuser", async (req, res) => {
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: "Try login with correct email and password" });
    }
    if (req.body.password !== userData.password) {
      return res
        .status(400)
        .json({ errors: "Try login with correct email and password" });
    }
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
