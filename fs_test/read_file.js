const fs = require('fs');

const check = (filePath) => {
    let isExist = false;
    try {
        fs.statSync(filePath);
        isExist = true;
    } catch (err) {
        isExist = false;
    }
    return isExist;
}


const read = (filePath) => {
    let content = new String();
    try{
        check(filePath);
        content = fs.readFileSync(filePath, 'utf8');
        console.log(content);
    }catch(err){
        throw err;
    }
    return content;
}

console.log(read('./fs_test/')); //=>