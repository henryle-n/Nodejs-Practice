// import mongo client to connect to mongoDB from JS
const mongoClient = require('mongodb').MongoClient;

// The assert module provides a set of assertion functions for verifying invariants. 
// https: //nodejs.org/api/assert.html#assertequalactual-expected-message
const assert = require('assert');

// import ops js
const dboper = require('./operations');


// connect to mongo DB & define DB name
const url = 'mongodb://localhost:27017/';
const dbName = "conFusion";


var document1 = {
    name: "2 DK Donut",
    description: "2 to ins DK yummy donut"
};

var document2 = [{
        name: "22 DK Donut",
        description: "22 to ins DK yummy donut"
    },
    {
        name: "23 DK Donut",
        description: "23 to ins DK yummy donut"
    },

];



var newDoc1 = {
    name: "2 DK Donut",
    description: "2 updated DK donut"
};

var newDoc2 = {
    name: "23 DK Donut",
    description: "23 updated DK donut"
};

var collection = 'dishes';

mongoClient
    .connect(url)
    .then(client => {
        console.log('connected to server');

        // connect to DB with name = dbName
        const db = client.db(dbName);
        // var collection = 'dishes';

        // we have 3 collections: dishes, leaders, promotions
        // const collection = db.collection('dishes');
        // connect to collection where data is inserted to 

        //use dbops to CRUD db
        dboper.insertDocuments(db, document2,
                collection).then(result => {
                console.log("Inserted document:\n", result.insertedId);
                console.log('--------------------');

                return dboper.findDocuments(db, collection)
            })
            .then(docs => {
                console.log("Found Documents:\n", docs);

                console.log('--------------------');
                return dboper.updateDocument(db, {
                    name: document2[0].name
                }, {
                    description: newDoc2.description
                }, collection);
            })
            .then(result => {
                console.log("Updated Document:\n", result);

                console.log('--------------------');
                return dboper.findDocuments(db, collection);
            })
            .then(docs => {
                console.log("Found Updated Documents:\n", docs);

                console.log('--------------------');
                return db.dropCollection(collection)
            }).then(result => {
                console.log("Dropped Collection: ", result);

                console.log('--------------------');
                return client.close();
            });
    })
    .catch(err => console.log('exception has occur: ' + err))