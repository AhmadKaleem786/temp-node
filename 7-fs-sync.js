const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./subfolder/first.txt', 'utf8')
const second = readFileSync('./subfolder/second.txt', 'utf8')


writeFileSync('./subfolder/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})