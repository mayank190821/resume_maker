const express = require("express");

const {
  signupController,
  loginController,
} = require("./controllers/auth.controller");
const {
  editResumeData,
  getResumeData,
} = require("./controllers/user.controller");
const { uploader } = require("./config/multer");

const Router = express();

// auth routes

// route = "auth/signup"
// req = {email, password, confirmPassword, name}
// res = confirmation message
Router.route("/signup").post(signupController);

// route = "auth/login"
// req = {email, password}
// res = {token, userData}
Router.route("/login").post(loginController);

// user routes

// route = "user/edit_data"
// req = {resumeData}
// header = {contentType="multipart/form-data"}
// res = updation confirmation message
Router.route("/edit_data").put(uploader.single("file"), editResumeData);

// route = "user/resume_data"
// req = {}
// res = {resumeData}
Router.route("/resume_data").get(getResumeData);

module.exports = Router;
