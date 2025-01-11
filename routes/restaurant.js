const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.post("/", async (req, res) => {
  try {
    const { restaurant_name, owner_name, email, password } = req.body;

    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newRestaurant = new Restaurant({
      restaurant_name,
      owner_name,
      email,
      password,
    });

    await newRestaurant.save();
    res.status(201).json({ message: "Restaurant registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
