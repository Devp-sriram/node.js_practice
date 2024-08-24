const http = require('http');

// const server = http.createServer((req,res)=>{
//     // if(req.url === '/'){
//     //     res.write('welcome to home')
//     // }else if(req.url === '/about'){
//     //     res.write('here is the short history')
//     // }else{
//     //     res.write(`
//     //         <h1>Oops!</h1>
//     //         <p> the page you are looking for is not exist </p>
//     //         <a href='/'>back to home </a>
//     //         `)
//     // }
//     // res.end()

// });


const server = http.createServer();

server.on('request',(req,res)=>{
    res.end('welcome')
})


server.listen(5000);
