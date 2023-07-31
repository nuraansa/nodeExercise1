// PATH
const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, 'index.js'));

// OS
const os = require('os');
console.log(os.platform());
console.log(os.arch());

//FS
const
{writeFile, readFile,
appendFile,
read} = require('fs')

readFile('./data.txt', 'utf-8', (err,
data)=>{
    if(!err) 
        console.log(data);
    else
        console.log("An error occured");
})