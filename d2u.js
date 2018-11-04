'use strict';
const iconv = require('iconv-lite');
const fs = require('fs');

const b = fs.readFileSync(process.argv[2]);

// Convert from an encoded buffer to js string.
const str = iconv.decode(b, 'cp437');

if (process.argv.length>3) {
  fs.writeFileSync(process.argv[3],str,'utf8');
}
else {
  console.log(str);
}
