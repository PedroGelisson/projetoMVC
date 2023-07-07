const { MongoClient } = require("mongodb");

let singleton;

async function connect(){
    if (singleton) return singleton;

    const client = new MongoClient(
        "mongodb+srv://admin:9Ywd9qlnVmsg35Mm@listadetarefas.gpqwksw.mongodb.net/?retryWrites=true&w=majority"
    );
    await client.connect();
    singleton = client.db("data");
    return singleton;
}

async function findAll(collection){
    const db = await connect();
    return db.collection(collection).find().toArray();
}

async function insertOne(collection,object){
    const db = await connect();
    return db.collection(collection).insertOne(object);
}

module.exports = {
    findAll,
    insertOne
}