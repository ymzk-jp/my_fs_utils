const fs = require('fs');

if (process.argv.length < 3) {
    console.error('lack argument');
    process.exit(1);
}
try {
    let files = fs.readdirSync(process.argv[2]);
    files.forEach(element => {
        console.log(element);
    });
}
catch (err) {
    throw err;
    process.exit(1);
}