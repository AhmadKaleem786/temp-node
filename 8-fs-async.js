const { secureHeapUsed } = require('crypto');
const { readFile, writeFile, read } = require('fs');
readFile('./subfolder/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return;
        }
        const second = result;

    writeFile('./subfolder/result-sync.txt', `Here is the result xD ${first}, ${second}`, (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(result);
    })}
    )
})