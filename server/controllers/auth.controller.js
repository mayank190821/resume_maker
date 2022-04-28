const UserModel = require("./../models/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

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

const loginController = async (req, res) => {
    UserModel.findOne({email: req.body.email}).then((user) => {
        if(user.authenticate(req.body.password)){
            const token = jwt.sign({
                _id: user._id
            }, process.env.jwt_secret, {expiresIn: 3600});
            res.cookie("t", token, {expire: new Date()+9999});
            user.hashedPassword = undefined;
            user.salt = undefined;
            res.status(200).json({token: token, user: user});
        }
        else{
            res.status(403).json({error: "Incorrect username or password!"});
        }
    }).catch((err) => {
        res.status(404).json({error: err.message});
    });
}

const isAuthenticated = (req, res, next) => {
    try{
        let token = jwt.verify(req.header(process.env.token_key), process.env.jwt_secret)
        if(token){
            req._id = token._id;
            next();
        }
        else{
            res.status(401).json({error: "Unauthorised User"});
        }
    }catch(err){
        res.status(401).json({error: "Unauthorised User"});
    }
}

module.exports = {signupController, loginController, isAuthenticated};