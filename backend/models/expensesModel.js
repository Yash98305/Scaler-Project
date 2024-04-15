const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Types.ObjectId,
        ref : "User"
      },
      title: {
        type: String,
      },
      accountId: {
          type: mongoose.Types.ObjectId,
          ref : "Account"
      },
      categoryId: {
          type: mongoose.Types.ObjectId,
          ref : "Categories"
      },
   expense_date :{
    type : Date
   }
    },
    {
      timestamps: true,
    }
);
module.exports = mongoose.model("Expense", expenseSchema);
