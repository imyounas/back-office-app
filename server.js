
require("dotenv").config();
require("./config/dbConnect");
const http  = require('http');
const app  = require('./app/app.js');

const PORT = process.env.PORT || 2020 ;

const server = http.createServer(app);

//console.log(server);
server.listen(PORT, console.log(`Server is running on Port ${PORT}`));