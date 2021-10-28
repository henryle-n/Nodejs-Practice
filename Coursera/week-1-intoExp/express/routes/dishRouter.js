// import dependencies
const express = require('express');

// create router
const dishRouter = express.Router();

// set up express json() parser
dishRouter.use(express.json());

// define http action when route '/dishes' invoked
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: "' + req.body.name + '" with details: "' + req.body.description + '"');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });

// define http action when route '/dishes' invoked
dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send dish Id# ${req.params.dishId} to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the dish Id# ${req.params.dishId} 
        with name: "${req.body.name}" 
        and details: "${req.body.description}"`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes/dishId');
    })
    .delete((req, res, next) => {
        res.end(`Deleting dish Id# ${req.params.dishId}`);
    });

//export module
module.exports = dishRouter;