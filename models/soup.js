const mongoose = require("mongoose") 
const soupSchema = mongoose.Schema({ 
 soup_name: String, 
 soup_size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("soup", 
soupSchema) 