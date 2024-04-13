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

exports.getCategory = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const categories = await Category.find({userId})
    res.status(200).send({
        success: true,
        message: "Categories fetched successfully",
        categories
    })
})

exports.updateCategory = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const {name,type,budget} = req.body
    const category = await Category.findOneAndUpdate({userId},{name,type,budget},{new:true})
    res.status(200).send({
        success: true,
        message: "Category updated successfully",
        category
    })
})

exports.deleteCategory = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const {name} = req.body
    const category = await Category.findOneAndDelete({userId,name})
    res.status(200).send({
        success: true,
        message: "Category deleted successfully",
        category
    })
})