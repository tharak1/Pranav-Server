const mongoose = require("mongoose");

const userDataschema =  mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    testsAnalysed:{
        type:Number,
        default:0,
    },
    improvement:{
        type:Number,
        default:0,
    },
    badges:{
        type:Number,
        default:0,
    },
    days:{
        type:Number,
        default:0,
    },
    score:{
        type:Number,
        default:0,
    },
    analysed:{
        type:Number,
        default:0,
    },

    graphData:[{
        type:Number,
        default:0,
    }],
});

module.exports = mongoose.model("userData",userDataschema);