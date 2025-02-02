const mongoose = require("mongoose")

const dbConnect = async()=>{
    // try{
    //     const conn = await mongoose.connect("mongodb+srv://saitharakreddyv59:tharak@tharak.k1lxca6.mongodb.net/fresh");
    //     console.log("database Connected : ",conn.connection.name);
    // }
    // catch(err){
    //     console.log(err);
    // }
    mongoose.connect("mongodb://127.0.0.1:27017/fresh").then(()=>console.log("database connected")).catch((err)=>console.log(err));
}

module.exports = dbConnect;