const multer = require("multer");
const multerConfig = require("./multer");

module.exports = (app) => {
  app
    .route("/")
    .post(multer(multerConfig).single("file"), async (req, res) => {
      console.log(req.file);
      return res.status(200).json(req.file);
    })
    .get((req, res) => {
      return res.json({ message: "Hello World" });
    });
};
