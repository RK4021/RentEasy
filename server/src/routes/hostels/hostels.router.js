const express = require("express");

const {
  httpGetAllHostels,
  httpGetHostel,
  httpGetHostelCount,
  httpGetHostelReviews,
  httpCreateHostel,
  httpUpdateHostel,
  httpRemoveHostel,
  httpFilterHostels,
  httpCreateHostelReview,
} = require("./hostels.controller");

const hostelsRouter = express.Router();

hostelsRouter.get("/", httpGetAllHostels);
hostelsRouter.get("/filter", httpFilterHostels);
hostelsRouter.get("/count", httpGetHostelCount);
hostelsRouter.get("/:id", httpGetHostel);
hostelsRouter.get("/:id/reviews", httpGetHostelReviews);

hostelsRouter.post("/", httpCreateHostel);
hostelsRouter.post("/:id/reviews", httpCreateHostelReview);

hostelsRouter.put("/:id", httpUpdateHostel);

hostelsRouter.delete("/:id", httpRemoveHostel);

module.exports = hostelsRouter;
