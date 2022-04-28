const express = require("express");
const mongoose = require("mongoose");

const Router = require("./routes");
const {isAuthenticated} = require("./controllers/auth.controller.js")

require("dotenv").config();

const app = express();

mongoose.connect(process.env.mongo_url);
mongoose.connection.on("connected", () => {
    console.log("connected to mongo.");
})
mongoose.connection.on("error", (err) => {
    console.log(err);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", isAuthenticated, Router);
app.use("/auth", Router);

app.listen(process.env.port, () => {
    console.log("server started..");
})