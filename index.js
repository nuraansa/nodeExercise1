// PATH
const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, 'index.js'));

// OS
const os = require('os');
console.log(os.platform());
console.log(os.arch());