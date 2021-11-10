const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CustomerCarModel = mongoose.model(
  "CustomerCarModel",
  new mongoose.Schema({
    customer: { type: Number, ref: "Customer" },
    car_model: { type: Number, ref: "CarModel" },
  }),
  "customer_car_models"
);

module.exports = CustomerCarModel;
