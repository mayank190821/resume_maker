const multer = require("multer");

// assign destination and filename to multer
const uploader = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, "uploads");
    },
    filename: (_, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
});

module.exports = { uploader };
