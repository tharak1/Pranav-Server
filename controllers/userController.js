const asyncHandler = require("express-async-handler");
const bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(500).json({error:"all fields are manditory  !!"});
    }
    else{
        const existingUser = await User.findOne({email});
        if(!existingUser){
                const hashedPassword =await bcrypt.hash(password,10);
            const user = await User.create({
                username,email,password:hashedPassword,
            });
            
            if(user){
                res.status(200).json(user);
            }
            else{
                res.status(500).json({error:"something went wrong !!"});
            }
        }
        else{
            res.status(500).json({error:"user already exists !!"});
        }
    }
});



const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body ;
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        const jwtToken = jwt.sign({
            user:{
                id : user.id,
                username:user.username,
                email:user.email,
                password:user.password,
            },
        },
        process.env.JWTKEY,
        
        );
        res.status(200).json({token:jwtToken});
    }
    else{
        res.status(500).json({error:"something went wrong !!"});
    }
}); 

const validateUser = asyncHandler(async(req,res)=>{
    const {token} = req.body;
    jwt.verify(token , process.env.JWTKEY,(err,decoded) =>{
        if(err){
            res.status(401);
            throw new Error("tokrn not valid ");
        }
        else{
            res.send(decoded.user)
            
        }
    });
});

const currentUser = asyncHandler(async (req,res) =>{

    res.json(req.user);
});












module.exports = {registerUser,loginUser,validateUser,currentUser}