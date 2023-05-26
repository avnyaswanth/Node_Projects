const fs = require("node:fs")

// streams module inherits from event emitter module

// fs module internally implements streams, we can use them accordingly

const readableStream = fs.createReadStream("./file.txt", {
    encoding : "utf-8",
    highWaterMark: 33   // reading the specific number of chars from the file
});
const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream)

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })