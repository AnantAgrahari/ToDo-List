import express from "express";
const app=express();
const port=3000;
import mongoose from "mongoose";
import todoRoutes from "./routes/routes.js";
const connection_url = "mongodb://localhost:27017"
// mongodb://127.0.0.1/test 
mongoose.set('strictQuery', true);
mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true,family:4})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log(err);
    });
    app.use(express.json());
    app.get("/",(req,res)=>{
        res.send("api is running.....");
    });
    app.use("/",todoRoutes);
app.listen(port,()=>{
    console.log(`api is running at port:${port}`);
});