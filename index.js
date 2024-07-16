const express = require("express")
const dbConnect = require("./connectDb")
const dotenv = require("dotenv").config();
const port = process.env.PORT ? process.env.PORT : 6000;
const cors = require("cors");
const app = express()


dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/recipe",require("./routes/recipeRoutes"));
app.use("/api/userdata",require("./routes/userDataRoutes"));
app.use("/api/userInfo",require("./routes/userInfoRoutes"));

app.listen(port ,()=>{
    console.log("server is live at ",port);
})

