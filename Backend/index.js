const express = require('express');
const server = express();


const PORT = 9090;

server.get('/',(req,res) => {
    res.send("Server started");
})

server.listen(PORT, () => {
    console.log("Server started successfully at ",PORT);
})