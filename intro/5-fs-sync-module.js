const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");
//fs.readFileSync
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");


writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first},${second}`,
  {flag:'a'}//here if you do not write this statment the result in result-sync.txt will be rewritten every time the code runs so to write the next text without deleting the previous text you should write {flag:'a'}
);
console.log('done with this task')
console.log('starting the next one')