const mongoose = require("mongoose");

const UserModel = mongoose.model("User", mongoose.Schema({
    "name": String,
    "email": String,
    "hashedPassword": String,
    "salt": Number,
    "resumeData": {
        "name": String,
        "email": String,
        "address": String,
        "phone": Number,
        "photo": String,
        "links": [String],
        "education": [{
            "degree": String,
            "organisation": String,
            "yearOfCompletion" : String
        }],
        "experience": [{
            "organisation": String,
            "role": String,
            "description": String,
            "startDate": String,
            "endDate": String
        }],
        "projects": [{
            "name": String,
            "type": String,
            "startDate": String,
            "endDate": String
        }],
        "skills": [String],
        "certificates": [String],
    }
}))

module.exports = UserModel