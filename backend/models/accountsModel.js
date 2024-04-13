const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
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
            enum:["active","inactive"],
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Account", accountSchema);
