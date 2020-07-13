const process = require("process");
const path = require("path");
const {NODE_ENV} = require("../../config")

const inputFileName = process.argv[2]
const currentDirectory  = process.cwd();
const inputFilePath = currentDirectory+"\\"+inputFileName

if(path.extname(inputFilePath)===".html" && NODE_ENV==="production"){
    const inputFileSplitted = inputFileName.split(".")
    inputFileSplitted.pop(inputFileSplitted.length)
    const outputFilePath = currentDirectory+inputFileSplitted.join("-")+".css"
    module.exports = {inputFilePath, outputFilePath};
}
else if(NODE_ENV==="production"){
    console.error(new TypeError("Wrong file type provided, only *.html"))
    process.exit(1);
}
// This is for development. Don't touch
else {
    module.exports = {inputFilePath}
}
