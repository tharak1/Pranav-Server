const asyncHandler = require("express-async-handler");
const userData = require("../models/userDataModel");


const initCreate = asyncHandler(async(req,res)=>{
    const data = await userData.create({user_id:req.user.id})
    res.status(200).json(data)
    //res.status(200).json({message:"hello"});
})
const updateUserData = asyncHandler(async(req,res)=>{
    const updated = await userData.findOneAndUpdate({user_id : req.user.id},req.body,{new:true})
    res.send(updated);
});


const getUserData = asyncHandler(async(req,res)=>{
    const  contacts = await userData.find({user_id : req.user.id});
    res.json(contacts);
})

const deleteUserdata = asyncHandler(async(req,res)=>{
    await userData.deleteMany();
    res.status(200).json({message:"success"})
})
module.exports = {updateUserData,getUserData,initCreate,deleteUserdata};