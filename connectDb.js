const mongoose = require("mongoose")

const dbConnect = async()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
        console.log("database Connected : ",conn.connection.name);
    }
    catch(err){
        console.log(err);
    }
    // mongoose.connect("mongodb://127.0.0.1:27017/fresh").then(()=>console.log("database connected")).catch((err)=>console.log(err));
}

module.exports = dbConnect;   