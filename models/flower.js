const mongoose = require("mongoose")
const flowerSchema = mongoose.Schema({
flower_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Flower", flowerSchema)