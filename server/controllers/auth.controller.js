const mongoose = require("mongoose");
const UserModel = require("./../models/user.model");

const signupController = async (req, res) => {
    const user = new UserModel(req.body);
    user.save().then((data) => {
        return res.status(200).json({
            user: data
        })
    }).catch((err) => {
        res.status(400).json({
            error: err.message
        })
    })
}

module.exports = {signupController};