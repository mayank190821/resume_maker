const express = require("express");
const {signupController, loginController} = require("./controllers/auth.controller");

const Router = express();

Router.route("/signup").post(signupController);
Router.route("/login").post(loginController);

module.exports = Router;