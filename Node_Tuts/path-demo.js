const path = require("node:path")

// __filename, __dirname, parse(), format(), isAbsolute(), join(), resoleve()
// these are the imp funcs in path module

console.log(__filename)
console.log(__dirname)

const fileObj = path.parse(__filename)
const dirObj = path.parse(__dirname)

console.log(fileObj)
console.log(dirObj)

console.log(path.format(fileObj))
console.log(path.format(dirObj))

console.log(path.join("folder1", "folder2", "data.json"))
console.log(path.join("/folder1", "//folder2", "data.json"))