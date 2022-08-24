const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created...');
// });

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//     if (err) throw err;
//     console.log('File written to...');

//     //file append 
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node js', err => {
//         if (err) throw err;
//         console.log('File written to...');
//     });
// });

//Read file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err) => {
        if (err) throw err;
        console.log('File renamed');
    });