const http = require("node:http")

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/') {
        res.writeHead(200, {"Content-type" : "text/plain"})
        res.end("home page");
    }
    else if(url == '/slow-page') {
        for(var i = 0;i<5000000000;i++) {}
        res.writeHead(200, {"Content-type" : "text/plain"})
        res.end("slow page");
    }
});

server.listen(8000, () => {
    console.log("server is up and running on port 8000");
})