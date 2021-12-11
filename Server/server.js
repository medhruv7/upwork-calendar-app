const http = require('http');
const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end("First Server");
}

const server = http.createServer(test);
server.listen(port, host, () => {
    console.log("server running")
})