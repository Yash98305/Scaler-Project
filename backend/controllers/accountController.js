const Income = require("../models/incomeModel.js");
const Account = require("../models/accountsModel.js");
const Category = require("../models/categoriesModel.js");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.createController = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const {name,type,budget} = req.body
    const category = new Category({name,type,budget,userId})
await category.save();
res.status(201).send({
    success: true,
    message: "Category added successfully",
    category
})
})

exports.getController = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const categories = await Category.find({userId})
    res.status(200).send({
        success: true,
        message: "Categories fetched successfully",
        categories
    })
})
