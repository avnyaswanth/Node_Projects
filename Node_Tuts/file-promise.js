const fs = require("node:fs/promises")

//  in fs/promises we can achieve promised based calling with async wait calls

// async function readFile() {
//     try {
//         const data = await fs.readFile("./file.txt", "utf-8")
//         console.log(data)
//     } catch(err) {
//         console.log(err)
//     }
// }

// readFile()


// promise based fs module

// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error))

// console.log("after async call")