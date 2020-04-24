const multer = require("multer");
const multerConfig = require("./multer");

module.exports = (app) => {
  const src = app.src.api;
  app.post("/login", src.auth.login);
  app.post("/validateToken", src.auth.validateToken);
  // app
  //   .route("/")
  //   .post(multer(multerConfig).single("file"), async (req, res) => {
  //     console.log(req.file);
  //     return res.status(200).json(req.file);
  //   })
  //   .get((req, res) => {
  //     return res.json({ message: "Hello World" });
  //   });

  /* Api de usuários */

  app.route("/users").get(src.users.get).post(src.users.save);

  app.route("/users/:id").get(src.users.getById).put(src.users.save);
};
