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




var document = {
    name: "DK Donut",
    description: "DK yummy donut"
};

var newDoc = {
    name: "DK Donut",
    description: "updated DK donut"
};

mongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('connected to server');

    // connect to DB with name = dbName
    const db = client.db(dbName);
    var collection='dishes';

    // we have 3 collections: dishes, leaders, promotions
    // const collection = db.collection('dishes');
    
    // connect to collection where data is inserted to 

    //use dbops to CRUD db
    dboper.insertDocument(db, document,
        collection, (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(db, collection, (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, {
                        name: document.name
                    }, {
                        description: newDoc.description
                    }, collection,
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, collection, (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            db.dropCollection(collection, (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            });
        });
});