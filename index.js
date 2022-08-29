// const Person = require('./person');

// const person1 = new Person('Yabsira kas', 21);

// person1.greetings();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');


