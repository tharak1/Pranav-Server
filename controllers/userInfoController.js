const asyncHandler = require("express-async-handler");
const userInfo = require("../models/userInfoModel");

const getUserInfo = asyncHandler(async(req,res)=>{
    const  contacts = await userInfo.find({user_id : req.user.id});
    res.json(contacts);
});

const initCreateInfo = asyncHandler(async(req,res)=>{
    const data = await userInfo.create({user_id:req.user.id})
    res.status(200).json(data)
});

const updateUserInfo = asyncHandler(async(req,res)=>{
    const updated = await userInfo.findOneAndUpdate({user_id : req.user.id},req.body,{new:true})
    res.send(updated);
});

const deleteUserInfo = asyncHandler(async(req,res)=>{
    await userInfo.deleteMany();
    res.status(200).json({message:"success"})
});


module.exports = {getUserInfo,updateUserInfo,deleteUserInfo,initCreateInfo}