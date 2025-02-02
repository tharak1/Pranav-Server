const mongoose = require("mongoose")

const userInfoSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    membershipStatus:{
        type:String,
        default:'no plan selected',
    },
    todaysRecipe:[{
        type:String,
        default:'no plan selected',
    }],
    recomendedRecipe:{
        type:String,
        default:'no plan selected',
    },
    walletBalance:{
        type:Number,
        default:0,
    },
    deliveryStatus:{
        type:Number,
        default:0,
    },
});

module.exports = mongoose.model("userInfo",userInfoSchema);