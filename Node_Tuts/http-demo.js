const http = require("node:http");
const fs = require("node:fs");

const person = {
    name : "hacker",
    age : 23
}

// req -> request is a readable Stream
// res -> response is a writeable Stream

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url == '/')
    {
        res.writeHead(200, {"Content-type" : "text/plain"})
        res.end("Home page")
    }
    else if(url == '/about')
    {
        res.writeHead(200, {"Content-type" : "text/plain"})
        res.end("about page");
    }
    else if(url == '/api') {
        res.writeHead(200, {"Content-type" : "application/json"});
        res.end(JSON.stringify({
            name : "hacker", 
            age : "20"
        }));
    }
    else {
        res.writeHead(200, {"Content-type" : "text/plain"})
        res.end("service not found !!!")
    }

    // const name = "Yaswanth"
    // res.writeHead(200, {"Content-type" : "text/html"});
    // let html = fs.readFileSync("./index.html", "utf-8")
    // html = html.replace("{{name}}", name);
    // res.end(html);
    // fs.createReadStream("./index.html").pipe(res)
    // res.end(JSON.stringify(person));
    // console.log(req)
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})

