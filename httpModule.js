const http = require('http');
const {readFileSync} = require('fs');


// geting file from html file

const homePage = readFileSync('./index.html');
const homeStyle = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    const url = req.url

    if(url === '/'){
        
        res.writeHead(200 , {'content-type':'text/html'})
        res.end(homePage)
    }
    else if(url === '/style.css'){
        res.writeHead(200 , {'content-type':'text/css'})
        res.end(homeStyle)

    }

    else{
        res.writeHead(404 , {'content-type':'text/html'})
        res.end('<h1>page not found</h1> , <a href="/">find more of the out site</a>')

    }
})

server.listen(5000)