const mongo = require('mongoose');
require('dotenv/config'); 

const modeluserSchema = new mongo.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true, unique : true},
    username : {type : String, unique : true, required : true,},
    userlist : [{
        type : mongo.Types.ObjectId,
        ref : "modelSchema",
    }]
}) 

module.exports = mongo.model("Newuser" , modeluserSchema);