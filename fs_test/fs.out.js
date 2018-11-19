const fs=require('fs');
var text = 'my text';
fs.writeFile(__dirname+'/fs_test/dust/out.txt', text);