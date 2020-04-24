const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "..", "tmp", "uploads"))
  );
};
