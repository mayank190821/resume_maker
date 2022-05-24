const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

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
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", isAuthenticated, Router);
app.use("/auth", Router);


app.listen(process.env.port || 2000, () => {
    console.log("server started...");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    })
})