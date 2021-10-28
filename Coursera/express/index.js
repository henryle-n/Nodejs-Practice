// import dependencies
const express = require('express');
const http = require('http');
const mg = require('morgan');
const calcRouter = require('./routes/calcRouter'); 

// server parameters
const hostName = 'localhost';
const port = 3000;

// create express app
const app = express();

// simple mock linear equation
const k = 1.6;
var yLin = (x, b) => k * x + b;

// set up middleware morgan
app.use(mg('dev'));
// set up middleware morgan json() within express
// bodyParser() is deprecated
app.use(express.json());

// set up Router
app.use('/compute', calcRouter);

// serve a static file from local storage
// by default, express will find and serve index.html
app.use(express.static(__dirname + '/public'));


// create express request handlers
// next is for middle ware ops which Node http doesn't have
// express in other hand, can handle middleware
app.use((error, req, res, next)=>{

   
    if (!error){

        // console.log("header :: ", req.headers);  // no need to log b/c morgan will serve enough logging info
        // create a response header to client
        res.writeHead(200, {
            "Content-Type" : "text/html"
            , "Author": "Henry Le"
        });
        res.end(`<html><body><p>this is a simple Express</p><html><body>`)
    }
    else res.writeHead(500, 'Something broke!');
})

// start up a server 
const server = http.createServer(app);

// specify listening port
server.listen(port, hostName, () => {
    console.log(`Server is listening on http://${hostName}:${port}`);
})