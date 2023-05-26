const http = require("http")

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
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log("server is up and running on port 8000");
})