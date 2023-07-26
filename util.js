const path = require("path");
const util = require("util");

console.log(path.basename(__filename));
const dirUploads = path.join(
__dirname,
"www",
"files",
"uploads"
);  // not a function, so nno need to be called
util.log(dirUploads);