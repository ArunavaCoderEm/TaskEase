const express = require('express');
const server = express();
const authchecker = require("./Route/authentication");
const propath = require("./Route/route");
const cors = require('cors');
const mongocon = require('./mongocon');

const PORT = 7070;

require('dotenv/config');

mongocon();

server.use(express.json());

server.use(
    cors({
      origin: "https://taskease-kappa.vercel.app",
      methods: "GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE",
      credentials: true,
    })
  );
  
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "https://taskease-kappa.vercel.app");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

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
