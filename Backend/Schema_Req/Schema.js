const mongo = require('mongoose');
require('dotenv/config'); 

const modelSchema = new mongo.Schema({
    todohead : {type : String, required : true},
    tododesc : {type : String, required : true},
    todoprio : {type : Number, required : true},
    existuser : [{
        type : mongo.Types.ObjectId,
        ref : "Newuser",
    }] 
}) 

module.exports = mongo.model("modelSchema" , modelSchema);