const route = require('express').Router();
const userexists = require("../Schema_Req/Newuser");
const modelSchema = require('../Schema_Req/Schema');

route.post('/todoadd' , async (req, res) => {
    try {    
        const todohead = req.body.todohead;
        const tododesc = req.body.tododesc;
        const todoprio = req.body.todoprio;
        const email = req.body.email;

        const userthereexist = 
        
        await userexists.findOne({ email });
        
        if(userthereexist) {
            const data = new modelSchema({
                todohead : todohead,
                tododesc : tododesc,
                todoprio : todoprio,
                existuser : userthereexist

            })

            await data.save().then(() => res.status(200).json({ data }));

            userthereexist.userlist.push(data);
            userthereexist.save();
        }
        else {
            res.status(400).json({ message : "No user found to be added" })
        }
    }
    catch (e) {
        res.status(400).json({ message : "Nothing found ", error : e })
    }

})

module.exports = route;