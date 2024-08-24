const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const stream = fs.createReadStream('./content/big.txt','utf8');
    stream.on('open',(result)=>{
    stream.pipe(res);
    })
    stream.on('error',(err)=>{
    res.end(err);
    })
   
}).listen(5000);