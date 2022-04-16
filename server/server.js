const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://resumemaker1408:gQr5GYij32aza4mo@cluster0.vqiao.mongodb.net/resumeMaker?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => {
    console.log("connected to mongo.");
})
mongoose.connection.on("error", (err) => {
    console.log(err);
})

app.listen(2000, () => {
    console.log("server started..");
})