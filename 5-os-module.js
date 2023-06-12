const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`The system has uptime of ${os.uptime()} seconds`)

const currentOP = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemeeory: os.freemem()
}

console.log(currentOP);