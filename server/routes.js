const express = require("express");
const {signupController, loginController, isAuthenticated} = require("./controllers/auth.controller");
const {editResumeData} = require("./controllers/user.controller");

const Router = express();

Router.route("/signup").post(signupController);
Router.route("/login").post(loginController);
Router.route("/edit_data").put(editResumeData);

module.exports = Router;