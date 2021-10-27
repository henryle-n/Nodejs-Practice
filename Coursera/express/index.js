// import dependencies
const express = require('express');
const http = require('http');
const mg = require('morgan');

// server parameters
const hostName = 'localhost';
const port = 3100;

// create express app
const app = express();

// init morgan
app.use(mg('dev'));

// serve a static file from local storage
app.use(express.static(__dirname + '/public'));

// create express request handlers
app.use((req, res, next)=>{
    // no need to log b/c morgan will serve enough logging info
    // console.log("header :: ", req.headers);

    // create a response header to client
    res.writeHead(200, {
        "Content-Type" : "text/html"
        , "Author": "Henry Le"
    });
    res.end(`<html><body><p>this is a simple Express</p><html><body>`)
})

// fire up server and specify listening port
const server = http.createServer(app);
server.listen(port, hostName, () => {
    console.log(`Server is listening on http://${hostName}:${port}`);
})