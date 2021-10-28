const express = require('express');


// create router from express lib
const calcRouter = express.Router()

// simple mock linear equation
const k = 1.6;
var yLin = (x, b) => k * x + b;

// set up json() parser
calcRouter.use(express.json());

// routing group init
calcRouter.route('/:eqID')
    .all((req, res, next) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            "Author": "Henry Le"
        });
        next();
    })
    .get((req, res, next) => {
        res.end(`we got a result of ${req.params.eqID} with method "${req.method}" : y = ${k} * ${req.body.xVal} + ${req.body.bVal} = ${yLin(parseInt(req.body.xVal), parseInt(req.body.bVal))}`)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.write(`Received :: (x, b) value = (${req.body.xVal}, ${req.body.bVal})
    `);

        res.end(`Adding result of ${req.method} method: ${yLin(+req.body.xVal,+req.body.bVal)} to DB`);
    })
    .put((req, res, next) => {
        res.end(`"${req.method}" method is sending updates of (${req.body.xVal}, ${req.body.bVal}) for equation ID: ${req.params.eqID}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting equation ID: ${req.params.eqID}`);
    });

module.exports = calcRouter;