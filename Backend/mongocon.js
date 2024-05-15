const mongoose = require('mongoose');
require('dotenv/config'); 

async function mongocon (req, res) {
    try {
        await mongoose.connect(process.env.MONGO_CONN_STRING);
        console.log('DB connection established');
    } catch (e) {
        res.status(400).json({
            message : "DB connection not established"
        })
        console.error(error);
    }
}

module.exports = mongocon;