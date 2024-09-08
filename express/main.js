const express = require('express');
let { people } = require('./data')
const app = express();
app.use(express.static('./methods-public'))
app.get('/api/people',(req,res)=>{
    res.status(200).json({succes:true,data:people})
})

// app.post('/api/people',(req,res)=>{

// })

app.listen(5000,()=>{console.log('server runnig on port 5000..')});
