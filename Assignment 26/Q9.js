const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const myEventHandler = () => {
  console.log('Event handler is triggered!');
};

eventEmitter.on('myEvent', myEventHandler);

eventEmitter.emit('myEvent');

eventEmitter.removeListener('myEvent', myEventHandler);

eventEmitter.emit('myEvent'); // No output, as the handler is no longer attached
