const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const subscribeHandler = (username) => {
  console.log(`Thanks for subscribing to College Wallah`);
};

eventEmitter.on('subscribe', subscribeHandler);

eventEmitter.emit('subscribe', "College Wallah");