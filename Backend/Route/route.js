const route = require('express').Router();
const userexists = require("../Schema_Req/Newuser");
const modelSchema = require('../Schema_Req/Schema');

route.post('/todoadd' , async (req, res) => {
    try {     
        const todohead = req.body.todohead;
        const tododesc = req.body.tododesc;
        const todoprio = req.body.todoprio;
        const id = req.body.id;

        const userthereexist = 
        
        await userexists.findById( id );
        
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

route.put('/todochange/:id' , async (req, res) => {
    try {    
        const todohead = req.body.todohead;
        const tododesc = req.body.tododesc;
        const todoprio = req.body.todoprio;
        const email = req.body.email;

        const userthereexist = 
        
        await userexists.findOne({ email });
        
        if(userthereexist) {
            const data = await modelSchema.findByIdAndUpdate(req.params.id,{todohead, tododesc})
            data.save().then(() => res.status(200).json({ message : "Task changed", data }));
        }
        else {
            res.status(400).json({ message : "No user found to be changed" })
        }
    }
    catch (e) {
        res.status(400).json({ message : "Nothing found ", error : e })
    }

})

route.delete('/tododelete/:id' , async (req, res) => {
    try {    

        const{ id } = req.body;

        const userthereexist = 
        
        await userexists.findByIdAndUpdate(
            id,
            {$pull : {userlist : req.params.id}}
        );
        
        if(userthereexist) {
            await modelSchema.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({ message : "Task deleted" }));
        }
        else {
            res.status(400).json({ message : "No user found to be deleted" })
        }
    }
    catch (e) {
        res.status(400).json({ message : "Nothing found ", error : e })
    }

})


route.get("/todoget/:id", async (req, res) => {
    try {
        const iddata = await modelSchema
        .find({existuser : req.params.id});
        res.status(200).json({ iddata })
    }
    catch (e) {
        res.status(400).json({ message : "Nothing found ", error : e }) 
    }
})

module.exports = route;