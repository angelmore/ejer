var fs = require("fs");
var filename = process.argv[2];
var buf = fs.readFileSync(filename, "utf8");
split_lines = buf.split("\n");
console.log(split_lines.length);