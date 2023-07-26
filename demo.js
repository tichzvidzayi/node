//import process from 'process';

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



/*

  process.stdout.write("abc");
  process.stdin.on("data", function (data) {
    process.stdout.write(data.toString().trim());
  })

  */