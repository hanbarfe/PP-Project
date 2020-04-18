const path = require("path");
const multer = require("multer");

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: function(req, file, cb) {
      var filetypes = /jpg|jpeg|png/;
      var mimetype = filetypes.test(file.mimetype);
      var extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      if (mimetype && extname) {
        return cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
      }
      cb("Error: Só são suportados esses tipos de arquivos -> " + filetypes);
    }
  })
};
