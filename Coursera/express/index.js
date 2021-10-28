// import dependencies
const express = require('express');
const http = require('http');
const mg = require('morgan');
// const bPar = require('body-parser');

// server parameters
const hostName = 'localhost';
const port = 3100;

// create express app
const app = express();

// init body parser to populate req.body to JSON format
// app.use(bPar.json()) // deprecated
// need to use express.json() for 4.16.0 && up

var x;
var b; 
const k = 1.6;

var yLin = (x, b) => k*x + b;

// init morgan
app.use(mg('dev'));


// handlers
app.all('/compute', (req, res, next) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        "Author": "Henry Le"
    });
    next();
});
app.get("/compute/:eq1", (req, res, next) => {
    res.end(`we got a result: ${yLin(1, 5)}`)
})
app.post("/compute/:eq1", (req, res, next) => {
    res.write(`Received :: 
    (x, b) value = (${req.body.xVal}, ${req.body.bVal})
    `);
    res.end(`Adding result of ${req.method} method: ${yLin(req.body.xVal,req.body.bVal )} to DB`);
})
app.put("/compute/:eq1", (req, res, next) => {
    res.statusCode = 403;
    res.end(`${req.method} method is NOT supported!`);
})
app.delete("/compute/:eq1", (req, res, next) => {
    res.statusCode = 403;
    res.end(`${req.method} method is NOT supported!`);
})

// serve a static file from local storage
// by default, express will find and serve index.html
app.use(express.static(__dirname + '/public'));


// create express request handlers
// next is for middle ware ops which Node http doesn't have
// express in other hand, can handle middleware
app.use((req, res, next)=>{

   
    // console.log("header :: ", req.headers);  // no need to log b/c morgan will serve enough logging info

    // create a response header to client
    res.writeHead(200, {
        "Content-Type" : "text/html"
        , "Author": "Henry Le"
    });
    res.end(`<html><body><p>this is a simple Express</p><html><body>`)
})

// start up a server 
const server = http.createServer(app);

// specify listening port
server.listen(port, hostName, () => {
    console.log(`Server is listening on http://${hostName}:${port}`);
})