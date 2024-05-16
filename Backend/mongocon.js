const mongo = require('mongoose');
require('dotenv/config'); 

async function mongocon (req, res) {
    try {
        await mongo.connect("mongodb+srv://godard:godard06mongo@cluster0.ymoraxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('DB connection established');
    } catch (e) {
        res.status(400).json({
            message : "DB connection not established"
        })
        console.error(error);
    }
}

module.exports = mongocon;