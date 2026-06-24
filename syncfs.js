const fs = require("fs");

const fileName = "test.txt";

fs.writeFileSync(fileName,"This is the initial content of the file.","utf-8");
const fileContent =fs.readFileSync(fileName,"utf-8");

console.log(fileContent)


fs.appendFileSync(fileName,"\nThis is the appended content of the file.","utf-8");
// fs.unlinkSync(fileName);