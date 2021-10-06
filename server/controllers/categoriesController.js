const Category = require('../models/CategoryModel');

const creatCategory = async (req,res)=>{
  const newCategory = await Category(req.body)

  try {
      const saveData = newCategory.save();
      res.status(200).json({massage:"creat category successfully!", data:saveData})
  } catch (error) {
      res.status(500).json({massage: "create category filed", error:error});
  }
}

const getCategory = async (req,res)=>{

    try {
        const category = await Category.find();
        res.status(200).json({massage:"get category successfully!", data:category})
    } catch (error) {
        res.status(500).json({massage: "get category filed", error:error});
    }
};

module.exports = {
    creatCategory,
    getCategory
}