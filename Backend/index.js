const express = require('express');
const server = express();
require('dotenv/config');
var mongocon = require('./mongocon');

const PORT = 7070;

server.get('/',(req,res) => {
    res.send("Server started");
})

server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));

mongocon();

server.listen(PORT, () => {
    console.log("Server started successfully at ",PORT);
})