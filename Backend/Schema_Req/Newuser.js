const mongo = require('mongoose');
require('dotenv/config'); 

const modeluserSchema = new mongo.Schema({
    email : {type : String, required : true},
    password : {type : String, required : true},
    username : {type : String, unique : true},
    userlist : [{
        type : mongo.Types.ObjectId,
        ref : "modelSchema",
    }]
}) 

module.exports = mongo.model("Newuser" , modeluserSchema);