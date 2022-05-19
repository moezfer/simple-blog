const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const blogSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body:{
        type:String,
    },
  
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);