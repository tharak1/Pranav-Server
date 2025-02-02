const asyncHandler = require("express-async-handler");
const Recipe = require("../models/recipeModel");

const createRecipe = asyncHandler(async(req,res)=>{
    const {imageUrl,videoUrl,name,recipe,rating} = req.body;

    const RecipeConst = await Recipe.create({
        imageUrl,videoUrl,name,recipe,rating
    });

    if(RecipeConst){
        res.status(200).json({message:"success"});
    }
    else{
        res.status(500).json({message:"error"});
    }
});


const getRecipie = asyncHandler(async(req,res)=>{
    const rec = await Recipe.findById(req.params.id);

    if(rec){
        res.status(200).json({message:"success",rec});
    }
    else{
        res.status(500).json({message:"error"});
    }
});

const getRecipies = asyncHandler(async(req,res)=>{
        const rec = await Recipe.find();
        if(rec){
            res.status(200).json({message:"success",rec});
        }
        else{
            res.status(500).json({message:"error"});
        }
});

module.exports = {getRecipie,getRecipies,createRecipe}

