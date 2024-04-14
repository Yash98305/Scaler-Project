const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncError.js");
const Income = require("../models/incomeModel.js");
const fs = require("fs");
exports.createController = catchAsyncErrors(async(req,res,next)=>{
    const userId = req.user._id
    const {title,amount,accountId,categoryId,income_date} = req.body
    const income = new Income({userId,title,amount,accountId,categoryId,income_date})
    await income.save();
    res.status(201).send({
        success: true,
        message: "income added successfully",
        income
    });
})