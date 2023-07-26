const path = require("path");
const util = require("util");
const v8 =  require("v8"); // we can get how much memory our app is using
console.log(path.basename(__filename));
const dirUploads = path.join(
__dirname,
"www",
"files",
"uploads"
);  // not a function, so nno need to be called
util.log(dirUploads);