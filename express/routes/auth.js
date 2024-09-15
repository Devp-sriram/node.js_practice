const express = require('express');
const router = express.Router();


router.post('/',(req,res)=>{
    const name = req.body.name;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send(`please provide credential`)
})

module.exports = router;

