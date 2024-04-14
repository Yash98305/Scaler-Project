const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const Expense = require("../models/expensesModel.js");
const fs = require("fs");
exports.createController = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id
    console.log(userId);
    const {title,amount,accountId,categoryId,income_date} = req.body
    const income = new Expense({userId,title,amount,accountId,categoryId,income_date})
    await income.save();
    res.status(201).send({
        success: true,
        message: "income added successfully",
        income
    });
})
exports.getController = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id
    const income = await Expense.find({userId})
    res.status(200).send({
        success: true,
        message: "income fetched successfully",
        income
    });
})