const mongoose = require("mongoose");
const crypto = require("crypto");

const user = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: "Email already exists"
  },
  hashedPassword: String,
  salt: String,
  resumeData: {
    name: String,
    email: String,
    address: String,
    phone: Number,
    profile: {
      data: Buffer,
      contentType: String,
    },
    links: [String],
    education: [
      {
        degree: String,
        organisation: String,
        yearOfCompletion: String,
      },
    ],
    experience: [
      {
        organisation: String,
        role: String,
        description: String,
        startDate: String,
        endDate: String,
      },
    ],
    projects: [
      {
        name: String,
        type: String,
        startDate: String,
        endDate: String,
      },
    ],
    skills: [String],
    certificates: [String],
  },
});

user
  .virtual("password")
  .set(function (input) {
    this._password = input;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(input);
  })
  .get(function () {
    return this._password;
  });

user.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf() * (Math.random() + 0.1)) + "";
  },
  encryptPassword: function (pass) {
    if (!pass) return "";
    return crypto.createHmac("sha1", this.salt).update(pass).digest("hex");
  },
  authenticate: function(pass){
      return this.hashedPassword === this.encryptPassword(pass)
  }
};

module.exports = mongoose.model("user", user);
