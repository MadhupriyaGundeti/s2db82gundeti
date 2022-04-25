const mongoose = require("mongoose") 
const soupSchema = mongoose.Schema({ 
 soup_name: String, 
 soup_size: String ,
 price:{type:Number,
    min:3,
    max:1500
}
}) 
module.exports = mongoose.model("soup", soupSchema) 