// import dependencies
const express = require('express');

// create router
const promoRouter = express.Router();

// set up express json() parser
promoRouter.use(express.json());

// define http action when route '/promotions' invoked
promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: "' + req.body.name + '" with details: "' + req.body.description + '"');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

// define http action when route '/promotions' invoked
promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send promotion Id# ${req.params.promoId} to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion Id# ${req.params.promoId} 
        with name: "${req.body.name}" 
        and details: "${req.body.description}"`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions/promoId');
    })
    .delete((req, res, next) => {
        res.end(`Deleting promotion Id# ${req.params.promoId}`);
    });

//export module
module.exports = promoRouter;