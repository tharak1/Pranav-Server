const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:users,
    },
    address:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    phoneno:{
        type:Number,
        required:true,
    },
    landmark:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model("Address",addressSchema);