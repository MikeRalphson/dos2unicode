'use strict';

const iconv = require('iconv-lite');
const fs = require('fs');

const b = fs.readFileSync(process.argv[2],'utf8');
const buf = iconv.encode(b, 'cp437');

fs.writeFileSync(process.argv[3],buf);
