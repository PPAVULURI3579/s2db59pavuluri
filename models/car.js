const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    car_brand: String,
    car_color: String,
    car_cost:{
        type:Number,
        min:5,
        max:100} 
})
module.exports = mongoose.model("Car", carSchema)