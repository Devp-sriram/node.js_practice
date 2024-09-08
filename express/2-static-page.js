const express = require('express');
const path = require('path');
const app = express();

// setup static and middlewares
app.use(express.static('./public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar/app.html'))
// })

app.get('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log(`server is listening on port 5000`)
})