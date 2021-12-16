const http = require('http');
const host = "localhost";
const port = 8000;
const experss = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')
const cors = require('cors')

// Server Code

const server = experss();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors())

server.listen(port, host, () => {
    console.log(`server running on host: ${host} on port: ${port}`);
})

// Mongo Code

function addDocument(collection, payload){
    collection.insertOne(payload);
}

function getDocuments(collection){
    return collection.find().toArray()
}

function replaceDocuments(collection, filter, update){
    return collection.replaceOne(filter, update);
}
function listDatabases(client){
    databaseList = client.db().admin().listDatabases();

    console.log("Databses : ");
    databaseList.databases.forEach(db => console.log(`db name - ${db.name}`));
}

const connectionUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
MongoClient.connect(connectionUri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db("upwork-calendar")
    const bookingDetailsCollection = db.collection('booking-details')
    const roomDeatilsCollection = db.collection('rooms')
    server.post('/saveBookingDetails', (req, res)=>{
        addDocument(bookingDetailsCollection, req.body);
        res.send("Saved Successfully");
    });
    
    server.get('/getBookingDetails', (req, res)=>{
        getDocuments(bookingDetailsCollection).then(results => {
            res.send(results);
        })
    });

    server.post('/addRoom', (req, res) => {
        addDocument(roomDeatilsCollection, req.body);
        res.send("Added Room");
    });

    server.get('/getRoom', (req, res) => {
        getDocuments(roomDeatilsCollection).then(result => 
            res.send(result));
    });

    server.post('/updateBooking', (req, res) => {
        replaceDocuments(bookingDetailsCollection,req.body.oldBookingId, req.body.newBooking).then(result => 
            res.send("Update Successful"));
    })
  })
  .catch(error => console.error(error))