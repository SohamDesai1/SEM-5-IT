
// const fs = require("fs");
// const readable = fs.createReadStream("demo.txt");
// readable.on('readable', () => {
//   let data;
//   while (null !== (data = readable.read())) {
//     console.log(`read: ${data}`);
//   }
// });
// console.log("done");

// let writer = fs.createWriteStream('write.txt')
// writer.write("Hello World")

const zlib = require("zlib")
const readable = fs.createReadStream("demo.txt");
var zip = zlib.createGzip()
var write = fs.createWriteStream("demo.txt.gz");
readable.pipe(zip).pipe(write);


var read = fs.createReadStream('text1.txt');
var write = fs.createWriteStream('text2.txt');
read.pipe(write);