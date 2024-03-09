const http = require("http");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`I am listeining on ${PORT}`));
