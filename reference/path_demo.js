const path = require('path');

// Base file name
console.log(path.basename(__filename));

//Directory name 
console.log(path.dirname(__filename));

//directory name with out using the path module
console.log(__dirname);

//File extension
console.log(path.extname(__filename));

//Create path object 
console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// const Person = require('./person');

// const person1 = new Person('Yabsira kas', 21);

// person1.greetings();
