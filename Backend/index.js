const express = require('express');
const server = express();
const authchecker = require("./Route/authentication");
const process = require("./Route/route");
const cors = require('cors');
const mongocon = require('./mongocon');

const PORT = 7070;

require('dotenv/config');

mongocon();

server.use(express.json());

server.use(cors({
    origin: ["https://taskeaseserver.vercel.app", "http://localhost:5173", "https://taskease-kappa.vercel.app"],
    methods: ['POST', 'DELETE', 'GET', 'PUT', 'PATCH'],
    credentials: true
}));

server.options("*", cors());

server.get('/', (req, res) => {
    res.send("Server started");
});

server.use ("/users/reglog" , authchecker )
server.use ("/users/data" , process )

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
    console.log("Server started successfully at ", PORT);
});
