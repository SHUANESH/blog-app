const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name:{
        type:String,
        require:true
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
