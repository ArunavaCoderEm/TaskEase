const express = require('express');
const server = express();
const authchecker = require("./Route/authentication");
const process = require("./Route/route");
const cors = require('cors');
var mongocon = require('./mongocon');

server.use(express.json())

const allowedOrigins = [
    "https://taskeaseserver.vercel.app",
    "http://localhost:5173",
    "https://taskease-kappa.vercel.app"
];

server.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ['POST', 'DELETE', 'GET', 'PUT', 'PATCH'],
    credentials: true
}));

server.options("", cors({
    origin: allowedOrigins,
    methods: ['POST', 'DELETE', 'GET', 'PUT', 'PATCH'],
    credentials: true
}));



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