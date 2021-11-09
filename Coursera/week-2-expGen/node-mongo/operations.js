const assert = require('assert');

exports.insertDocuments = (db, document, collection) => {
    const coll = db.collection(collection);
    if (Array.isArray(document)) {
        console.log('Doc is an array');
        return coll.insertMany(document);
    } else {
        console.log('Doc is an object');
        return coll.insertOne(document);
    }
};

exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocuments = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);

};

exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, {
        $set: update
    }, null);

};