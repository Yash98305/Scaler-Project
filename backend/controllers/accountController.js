const Income = require("../models/incomeModel.js");
const Account = require("../models/accountsModel.js");
const Category = require("../models/categoriesModel.js");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.createController = catchAsyncError(async(req,res,next)=>{
    const userId = req.user._id
    const cash= {
        userId,
        name: "Cash",
        balance: 0,
        type: "My Cash",
        status: "Active"
    }
    const bank ={
        userId,
        name: "Bank",
        balance: 0,
        type: "My Bank",
        status: "Active"
    }
    const paypal ={
        userId,
        name: "Paypal",
        balance: 0,
        type: "My E-Wallet",
        status: "Active"
    }
    const other ={
        userId,
        name: "Others",
        balance: 0,
        type: "Others",
        status: "Active"
    }
    const account = await new Account([cash,bank,other,paypal]).save()

res.status(201).send({
    success: true,
    message: "Category added successfully",
    account
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
