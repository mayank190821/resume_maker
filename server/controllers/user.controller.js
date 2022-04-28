const mongoose = require("mongoose");
const UserModel = require("./../models/user.model");

const editResumeData = (req, res) => {
    res.status(200).json({message: req._id});
}

module.exports = {editResumeData}