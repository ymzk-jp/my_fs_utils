'use strict';
const fs = require('fs');

fs.readdir('.',(err,files)=>{
    if(err){
        throw err;
    }
    files.forEach((file)=>{
        if(fs.statSync(file)){
            console.log(file);
        }
    });
});