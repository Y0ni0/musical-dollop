const EventEmitter = require('events');

//create an emmiter class
class MyEmitter extends EventEmitter { }

//Init object
const myEmmiter = new MyEmitter();

//Event listener
myEmmiter.on('event', () => console.log('Event Fired!...'));

//Init event
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');
