const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current Max Listeners:', currentMaxListeners);

eventEmitter.setMaxListeners(5);

console.log('Updated Max Listeners:', eventEmitter.getMaxListeners());