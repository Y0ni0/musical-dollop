const path = require('path');

// Base file name
console.log(path.basename(__filename));

//Directory name 
console.log(path.dirname(__filename));

//directory name with out using the path module
console.log(__dirname);

//File extension
console.log(path.extname(__filename));
