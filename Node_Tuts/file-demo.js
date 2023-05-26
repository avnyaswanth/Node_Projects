const fs = require("node:fs")

console.log(fs.readFileSync("./file.txt", "utf-8"));

// async
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error)
        console.log(error);
    else {
        console.log(data)
    }
});

const greet = "Hi there !"

fs.writeFileSync("./write.txt", greet)
// appending the file
// async
fs.writeFile("./write.txt", "Yaswanth here !", {flag : "a"}, (error)=> {
    if(error)
        console.log(error);
    else {
        console.log("file is written successfully")
    }
})