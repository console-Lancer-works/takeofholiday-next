const mongoose = require("mongoose");
const toursSchema = mongoose.Schema(
  {
    imageUrl:[{type:String}],
    title:{type:String,require:true},
    shortDesc:{type:String,require:true},
    nights:{type:Number},
    days:{type:Number},
    category:{type:Number,require:true}
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("tours", toursSchema);