// import dependencies
const express = require('express');

// create router
const leaderRouter = express.Router();

// set up express json() parser
leaderRouter.use(express.json());

// define http action when route '/leaders' invoked
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: "' + req.body.name + '" with details: "' + req.body.description + '"');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });

// define http action when route '/leaders' invoked
leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send leader Id# ${req.params.leaderId} to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the leader Id# ${req.params.leaderId} 
        with name: "${req.body.name}" 
        and details: "${req.body.description}"`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders/leaderId');
    })
    .delete((req, res, next) => {
        res.end(`Deleting leader Id# ${req.params.leaderId}`);
    });

//export module
module.exports = leaderRouter;