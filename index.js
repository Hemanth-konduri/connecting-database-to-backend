const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const apiKey = process.env.MongoDB_URI;

app.listen(8080, async(req, res)=>{
    try{
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("Connected successfully");
    }catch(error){
        res.status(500).send({message:"Something went wrong"})
        console.log("something went wrong", error);
    }
    
})

app.get("/buriburi", async(req, res)=>{
    res.status(200).send({message:"Enjoy pandago ra dosthullara"});
    console.log("API Key", apiKey);
} );

process.on("unHandledRejection", error =>{
    Console.error("Unhandled promise rejection: ", error);
})