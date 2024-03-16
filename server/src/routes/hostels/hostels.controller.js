const {
  getAllHostels,
  getHostel,
  getHostelCount,
  getHostelReviews,
  createHostel,
  updateHostel,
  removeHostel,
  filterHostels,
  createHostelReview,
} = require("./../../models/hostels.model");

const MAX_POSSIBLE_PAGE_SIZE = 20;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

function httpGetAllHostels(req, res) {
  let { page, pageSize } = req.query;

  page = page ? Number(page) : DEFAULT_PAGE;
  pageSize = pageSize ? Number(pageSize) : DEFAULT_PAGE_SIZE;

  if (pageSize > MAX_POSSIBLE_PAGE_SIZE) {
    pageSize = DEFAULT_PAGE_SIZE;
  }

  return res.json(getAllHostels({ page, pageSize }));
}

function httpGetHostel(req, res) {
  const id = req.params.id;
  const hostel = getHostel(id);

  if (!hostel) {
    return res.status(404).json({
      error: "Hostel not found",
    });
  }

  return res.json({ hostel });
}

function httpGetHostelCount(req, res) {
  return res.json({
    count: getHostelCount(),
  });
}

function httpFilterHostels(req, res) {
  try {
    const filterObj = req.query;
    let { page, pageSize } = filterObj;

    delete filterObj.page;
    delete filterObj.pageSize;

    page = page ? Number(page) : DEFAULT_PAGE;
    pageSize = pageSize ? Number(pageSize) : DEFAULT_PAGE_SIZE;

    if (pageSize > MAX_POSSIBLE_PAGE_SIZE) {
      pageSize = DEFAULT_PAGE_SIZE;
    }

    const hostels = filterHostels(filterObj, { page, pageSize });

    return res.json(hostels);
  } catch (err) {
    res.status(400).json({
      error:
        "Oops! Something went wrong with your request. Please check your input and try again.",
    });
  }
}

function httpCreateHostel(req, res) {
  const newHostel = req.body;

  return res.json(createHostel(newHostel));
}

function httpUpdateHostel(req, res) {
  const id = +req.params.id;
  const updatedHostel = req.body;
  const hostel = getHostel(id);

  if (hostel === null) {
    return res.status(404).json({
      error: "Hostel not found",
    });
  }
  updateHostel(id, updatedHostel);

  return res.json({
    message: "Hostel updated",
  });
}

function httpRemoveHostel(req, res) {
  const id = +req.params.id;
  const hostel = getHostel(id);

  if (hostel === null) {
    return res.status(404).json({
      error: "Hostel not found",
    });
  }

  removeHostel(id);

  return res.json({
    message: "Hostel deleted",
  });
}

//reviews

function httpGetHostelReviews(req, res) {
  let { page } = req.query;
  const id = +req.params.id;
  const hostel = getHostel(+id);

  page = page ? Number(page) : DEFAULT_PAGE;

  if (!hostel) {
    return res.status(400).json({
      error: "Hostel not found",
    });
  }

  const reviews = getHostelReviews(id, page);

  return res.json(reviews);
}

function httpCreateHostelReview(req, res) {
  const id = +req.params.id;
  const { review } = req.body;
  const hostel = getHostel(+id);

  if (!hostel) {
    return res.status(400).json({
      error: "Hostel not found",
    });
  }

  createHostelReview(id, review);

  res.json({
    message: "Review created",
  });
}

function httpRemoveHostelReview(req, res) {
  const { hostelId, reviewId } = req.body;
  //take extra care that no one can delete others review
  //only user and admin should be able to delete reviews
}

module.exports = {
  httpGetAllHostels,
  httpGetHostel,
  httpGetHostelCount,
  httpGetHostelReviews,
  httpCreateHostel,
  httpUpdateHostel,
  httpRemoveHostel,
  httpFilterHostels,
  httpCreateHostelReview,
};
