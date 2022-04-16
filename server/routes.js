const express = require("express");
const {signupController} = require("./controllers/auth.controller");

const Router = express();

Router.route("/signup").post(signupController);

module.exports = Router;