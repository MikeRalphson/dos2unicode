var iconv = require('iconv-lite');
var fs = require('fs');

//var s = fs.readFileSync(process.argv[2],'binary');
var b = fs.readFileSync(process.argv[2]);

// Convert from an encoded buffer to js string.
//str = iconv.decode(Buffer.from(s), 'cp437');
str = iconv.decode(b, 'cp437');

// Convert from js string to an encoded buffer.
//buf = iconv.encode("Sample input string", 'win1251');

// Check if encoding is supported
//iconv.encodingExists("us-ascii")

console.log(str);
