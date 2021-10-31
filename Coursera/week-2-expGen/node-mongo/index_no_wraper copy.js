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

mongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('connected to server');

    // connect to DB with name = dbName
    const db = client.db(dbName);

    // connect to collection where data is inserted to 
    const collection = db.collection('dishes');

    // perform insert ops with one record
    collection.insertOne({
        "name": "deli 2",
        "description": "Deli d2 from Butan"
    }, (err, result) => {
        assert.equal(err, null);
        console.log('After insert: \n');
        console.log(result.ops);


        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log('Record found: \n');
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                console.log('closing connection');
                client.close();
            });
        });


    });
});