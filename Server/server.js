const http = require('http');
const host = "localhost";
const port = 8000;
const {MongoClient} = require('mongodb')

async function listDatabases(client){
    databaseList = await client.db().admin().listDatabases();

    console.log("Databses : ");
    databaseList.databases.forEach(db => console.log(`db name - ${db.name}`));
}

async function connectToDb() {
    const connectionUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    const client = new MongoClient(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        await client.connect();
        await listDatabases(client);
    } catch(e){
        console.log(e);
    } finally {
        await client.close();
    }
}

connectToDb().catch(console.error);

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end("First Server");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("server running")
})