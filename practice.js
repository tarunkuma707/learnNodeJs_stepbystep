const fs = require('fs');
fs.writeFileSync('hello.txt','This is test file');
console.log("->>>",__filename);
const fileSystem = require('fs').writeFileSync;
fileSystem('codetest.txt','code by test');