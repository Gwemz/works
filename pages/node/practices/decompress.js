var fs = require('fs');
var zlib = require('zlib');
// 解压input.txt.gz为decompress.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompress.txt'));

console.log('文件解压完成');  