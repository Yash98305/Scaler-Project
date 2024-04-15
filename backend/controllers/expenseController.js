const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const Expense = require("../models/expensesModel.js");
const fs = require("fs");
exports.createController = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id
    console.log(userId);
    const {title,amount,accountId,categoryId,expense_date} = req.body
    const expense = new Expense({userId,title,amount,accountId,categoryId,expense_date})
    await expense.save();
    res.status(201).send({
        success: true,
        message: "expense added successfully",
        expense
    });
})
exports.getController = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id
    const expense = await Expense.find({userId}).populate("accountId").populate("categoryId")

    console.log(expense);
    res.status(200).send({
        success: true,
        message: "expense fetched successfully",
        expense,
    });
})