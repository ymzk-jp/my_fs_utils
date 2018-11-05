const fs = require('fs');

function check(filePath) {
    var isExist = false;
    try {
        fs.statSync(filePath);
        isExist = true;
        console.log(filePath);
    } catch (err) {
        isExist = false;
    }
    return isExist;
}

console.log(check('./fs_test/'));