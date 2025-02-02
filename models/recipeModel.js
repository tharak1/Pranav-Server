const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    recipe:[{
        type:String,
        required:true,
    }],
    rating:{
        type : Number,
        required :[true ,"this is manditory"],
        min:0,
        max : 5,
    },
});

recipeSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

recipeSchema.set('toJSON',{
    virtuals : true,
});

module.exports = mongoose.model("Recipe",recipeSchema)