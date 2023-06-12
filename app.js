const hello = require('lodash');

const b = [1, 2, [3], [[5]]]

console.log(hello.flattenDeep(b));