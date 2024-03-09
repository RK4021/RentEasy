const express = require("express");

const api = express.Router();

api.use("/", (req, res) => {
  res.json("Hey its me");
});

module.exports = api;
