// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//review model
const review = {
  id: 1,
  review: "Good",
  userId: 1,
  time: "time",
};

// Array to store hostel objects
let hostels = [];

// Sample data for hostels
const hostelNames = [
  "Cozy Corner Hostel",
  "City Lights Hostel",
  "Urban Oasis Hostel",
  "Happy Backpackers Hostel",
  "Downtown Lodge Hostel",
  "Sunny Side Hostel",
  "Central Stay Hostel",
  "Harbor View Hostel",
  "Traveler's Haven Hostel",
  "Peaceful Retreat Hostel",
];

const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Sydney",
  "Berlin",
  "Los Angeles",
  "Rome",
  "Barcelona",
  "Dubai",
];

const reviews = {
  0: ["Facilities are really good", "Food is upto mark"],
  1: ["Facilities are really good", "Food is upto mark"],
  2: ["Facilities are really good", "Food is upto mark"],
  3: ["Facilities are really good", "Food is upto mark"],
  4: ["Facilities are really good", "Food is upto mark"],
  5: ["Facilities are really good", "Food is upto mark"],
  6: ["Facilities are really good", "Food is upto mark"],
};

// Generate hostel objects
for (let i = 0; i < 10; i++) {
  let hostel = {
    id: i + 1,
    name: hostelNames[getRandomInt(0, hostelNames.length - 1)],
    description: "A cozy and comfortable hostel for travelers.",
    address: `123 XYZ Street`,
    city: cities[getRandomInt(0, cities.length - 1)],
    country: "USA",
    priceRange: `$${getRandomInt(20, 50)} - $${getRandomInt(60, 100)}`,
    amenities: ["Wi-Fi", "Kitchen", "Common Lounge", "Laundry", "Breakfast"],
    roomTypes: ["Dormitory", "Private Room"],
    rating: getRandomInt(3, 5),
    reviews: getRandomInt(50, 200),
    cancellationPolicy: "Free cancellation up to 24 hours before check-in.",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    availability: true,
    creationTime: "time",
    lastUpdatedTime: "time",
    rooms: [{ capacity: 3, price: 400, ac: true }],
  };
  hostels.push(hostel);
}

function getAllHostels(pagination) {
  const { page, pageSize } = pagination;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    hostels: hostels.slice(startIndex, endIndex),
    totalCount: hostels.length,
  };
}

function getHostel(id) {
  const hostel = hostels.find((item) => item.id == id);

  return hostel || null;
}

function getHostelCount() {
  return hostels.length;
}

function filterHostels(filter, pagination) {
  let filteredHostels = hostels;
  const { amenities } = filter;
  const { page, pageSize } = pagination;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + Number(pageSize);

  delete filter.amenities;

  console.log(amenities);

  for (let key of Object.keys(filter)) {
    filteredHostels = filteredHostels.filter(
      (hostel) =>
        hostel[key].toString().toLowerCase() === filter[key].toLowerCase()
    );
  }

  return {
    hostels: filteredHostels.slice(startIndex, endIndex),
    totalCount: filteredHostels.length,
  };
}

function createHostel(hostel) {
  hostel.id = hostels.length + 1;
  hostels.push(hostel);

  return hostel;
}

function updateHostel(id, hostel) {
  const index = hostels.findIndex((item) => item.id === id);
  hostels[index] = hostel;
}

function removeHostel(id) {
  hostels = hostels.filter((item) => item.id !== id);
}

// reviews

function getHostelReviews(hostelId, page) {
  //give only 10 revies in one request
  if (!reviews[hostelId])
    return {
      reviews: [],
      totalReviews: 0,
    };

  return {
    reviews: reviews[hostelId],
    totalReviews: reviews[hostelId].length,
  };
}

function createHostelReview(hostelId, review) {
  if (reviews[hostelId]) {
    reviews[hostelId].push(review);
  } else {
    reviews[hostelId] = [review];
  }
}

function removeHostelReview(hostelId, reviewId) {
  //code
}

module.exports = {
  getAllHostels,
  getHostel,
  getHostelReviews,
  filterHostels,
  getHostelCount,
  createHostel,
  updateHostel,
  removeHostel,
  createHostelReview,
  removeHostelReview,
};
