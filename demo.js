global.console.log(21112100);

const path = require('path');
//console.log(__dirname);
//console.log(__filename);
console.log(`The file name is ${path.extname(__filename)}sc
 `);


 for ( const key in global)
 {
        console.log(key);
  }