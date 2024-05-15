const express = require('express');
const server = express();
const authchecker = require("./Route/authentication");
const process = require("./Route/route");
var mongocon = require('./mongocon');

server.use(express.json())

const PORT = 7070;

require('dotenv/config');


server.get('/',(req,res) => {
    res.send("Server started");
})

mongocon();


server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));


server.use("/users/reglog",authchecker);
server.use("/users/data",process);


server.listen(PORT, () => {
    console.log("Server started successfully at ",PORT);
})