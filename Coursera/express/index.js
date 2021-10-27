const express = require('express');
const http = require('http');

const hostName = 'localhost';
const port = 3100;

const app = express();

app.use((req, res, next)=>{
    console.log("header :: ", req.headers);
    res.writeHead(200, {
        "Content-Type" : "text/html"
        , "Author": "Henry Le"
    });
    res.end(`<html><body><p>this is a simple Express</p><html><body>`)
})

const server = http.createServer(app);
server.listen(port, hostName, () => {
    console.log(`Server is listening on http://${hostName}:${port}`);
})