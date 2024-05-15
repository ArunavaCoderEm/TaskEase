const route = require('express').Router();
const hasher = require('bcryptjs');
const userexists = require("../Schema_Req/Newuser");

route.post("/signup",  async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
        const hashpass = hasher.hashSync(password);
        const senduser = new userexists({
            email : email,
            password : hashpass,
            username : username
        });
        await senduser.save()
        .then(() => {
            res.status(200).json({userin : senduser})
        })
    }
    catch(e) {
        res.status(200).json({message : " User signed up before "});
    }
})



route.post("/login",  async (req, res) => {
    try {
        const userthere = await userexists.findOne({
            email : req.body.email
        });
        if(! userthere) {
            res.status(200).json({message : " Create One Account First "});  
        }
        const passthere = 
        
        hasher.compareSync(req.body.password, userthere.password)
       
        if(! passthere) {
            res.status(200).json({message : " Passwords didn't match "});
        }

        const {password, ...details} = userthere._doc;
        res.status(200).json({ details });
    }
    catch(e) {
        res.status(200).json({message : " User signed up before "});
    }
})


module.exports = route;