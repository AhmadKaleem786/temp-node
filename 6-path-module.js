const path = require('path');

console.log(path.sep);


const a = path.join('/LEARNNODE', 'subfolder', 'test.txt');

console.log(a);

const absolute = path.resolve(__dirname, '/LEARNNODE', 'subfolder', 'test.txt')

console.log(absolute);