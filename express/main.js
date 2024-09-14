const express = require('express');
let { people } = require('./data')
const app = express();

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false }))
// parse json 
app.use(express.json());


app.get('/api/people',(req,res)=>{
    res.status(200).json({succes:true,data:people})
})

app.post('/login',(req,res)=>{
    const name = req.body.name;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send(`please provide credential`)
})

app.listen(5000,()=>{console.log('server runnig on port 5000..')});
