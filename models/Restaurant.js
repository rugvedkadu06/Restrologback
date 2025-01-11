const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
