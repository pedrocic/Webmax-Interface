require("dotenv").config();
require("./config/mongodb");
const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
  .then("./src/config/middlewares.js")
  .then("./src/api/validations.js")
  .then("./src/api")
  .then("./src/config/routes.js")
  .into(app);

const port = process.env.PORT || 3003;
const address = process.env.ADDRESS || "localhost";

const server = require("http").createServer(app);

server.listen(port, address, () => {
  console.log(
    "[HOST] The server is listening on address:" +
      ` "\x1b[34mhttp://${address}:${port}\x1b[0m"`
  );

  console.log("[HOST] Press CTRL + C to stop the server!");
});
