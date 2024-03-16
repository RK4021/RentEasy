const express = require("express");

const hostelsRouter = require("./hostels/hostels.router");

const api = express.Router();

api.use("/hostels", hostelsRouter);
api.use("/", (req, res) => {
  res.json("Hey its me");
});

module.exports = api;
