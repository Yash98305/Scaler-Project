const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        balance: {
            type:String ,
        },
        type: {
            type: String,
        },
        status:{
            type: String,
            enum:["Active","Inactive"],
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Account", accountSchema);
