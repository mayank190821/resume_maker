const UserModel = require("./../models/user.model");
const fs = require("fs");

const editResumeData = async (req, res) => {
  try {
    var img = fs.readFileSync(req.file.path);
    var encodedString = img.toString("base64");
    var image = {
      contentType: req.file.mimetype,
      data: new Buffer.from(encodedString, "base64"),
    };
    fs.rm(req.file.path, () => {});
    req.body.profile = image;
    return await UserModel.updateOne(
      { _id: req._id },
      { $set: { resumeData: req.body } }
    )
      .then(() => {
        return res
          .status(200)
          .json({ message: "resume data updated successfully" });
      })
      .catch((err) => {
        return res.status(500).json({ err: err.message });
      });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

const getResumeData = async (req, res) => {
  try {
    let data = await UserModel.findOne({ _id: req._id }, { resumeData: true });
    return res.status(200).json({ data: data });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

module.exports = { editResumeData, getResumeData };
