const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    car_brand: String,
    car_color: String,
    car_cost: Number
})
module.exports = mongoose.model("Car", carSchema)