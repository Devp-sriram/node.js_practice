const http = require('http');
const {readFileSync} = require('fs');

// get all files

const homepage = readFileSync('./navbar/app.html');
const homestyle = readFileSync('./navbar/style.css');
const homeimg = readFileSync('./navbar/logo.svg');
const homejs = readFileSync('./navbar/browser-app.js');


const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url)
    // home
    if(url == '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homepage);
    }
    // about
    else if(url =='/about.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<h1>abour page</h1>`)
    }
    // style
    else if(url =='/style.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homestyle);
    }
    // logo
    else if(url =='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeimg);
    }
    // js
    else if(url =='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homejs);
    }
    // 404
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>404 Not found</h1>')
    }
    res.end();
    
})
server.listen(5000);