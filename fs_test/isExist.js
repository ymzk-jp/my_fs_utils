const fs = require('fs');

function check(filePath) {
    var isExist = false;
    try {
        fs.statSync(filePath);
        isExist = true;
        console.log(filePath); //=> ./fs_test/
    } catch (err) {
        isExist = false;
    }
    return isExist;
}

console.log(check('./fs_test/')); //=> true

// node fs_test/isExist.js