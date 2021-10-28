// import dependencies
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

// server parameters
const hostName = 'localhost';
const port = 3000;

// create express app
const app = express();

// set up middleware morgan
app.use(morgan('dev'));

// bodyParser() is deprecated, thus
// set up json() in express library 4.16.0
app.use(express.json());

// set up Router
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);

// serve a static file from local storage
// by default, express will find and serve index.html
app.use(express.static(__dirname + '/public'));

// create express request handlers
app.use((req, res, next) => {
    // create a response header to client
    res.writeHead(500, {
        "Content-Type": "text/html",
        "Author": "Henry Le"
    });
    res.end(`
<html><body>
<h1><b>Error:</b> 500 - Internal Server Error</h1>
<p1>Make sure:</p>
<ul>
<li>You're requesting for an <b>'.html'</b> file</li> 
<li>Use only <b>'GET'</b> method for home page request</li>
<li>If none works, please contact our website admin for help!</li>
</ul>
<html><body>`)
})

// start up a server 
const server = http.createServer(app);

// specify listening port
server.listen(port, hostName, () => {
    console.log(`Server is listening on http://${hostName}:${port}`);
})