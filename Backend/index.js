const express = require('express');
const server = express();
const authchecker = require("./Route/authentication");
const propath = require("./Route/route");
const cors = require('cors');
const mongocon = require('./mongocon');

const PORT = 7070;

const corsConfig = {
    origin : "*",
    credentials : true,
    methods : ["GET","HEAD","PUT","PATCH","POST","OPTIONS","DELETE"]
}

require('dotenv/config');

mongocon();

server.use(express.json());

server.use(cors());
  
server.get('/', (req, res) => {
    res.send("Server started");
});
 
server.use ("/users/reglog" , authchecker )
server.use ("/users/data" , propath )

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
    console.log("Server started successfully at ", PORT);
});
