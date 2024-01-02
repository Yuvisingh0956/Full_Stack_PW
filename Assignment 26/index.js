// For question 2

const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:

Node.js is built on the V8 JavaScript runtime and follows a single-threaded, event-driven architecture.

1. V8 JavaScript Runtime:
   - Node.js uses the V8 JavaScript engine, developed by Google, to execute JavaScript code. V8 compiles JavaScript code into machine code for faster execution.

2. Single-threaded Event Loop:
   - Node.js operates on a single-threaded event loop. This means that it can handle multiple connections concurrently without the need for multi-threading.

3. Event-driven:
   - Node.js is designed to be event-driven, allowing asynchronous, non-blocking I/O operations. This is achieved through the use of callbacks and the event loop.

4. Non-blocking I/O:
   - Node.js uses non-blocking I/O operations, which allows it to efficiently handle a large number of simultaneous connections without creating a new thread for each connection.

5. Modules:
   - Node.js has a module system that allows developers to modularize their code. CommonJS is the module specification used in Node.js.

6. Package Manager (npm):
   - Node.js comes with npm (Node Package Manager), a powerful package manager that allows developers to easily install, manage, and share packages of code.

7. libuv:
   - Node.js uses libuv, a cross-platform asynchronous I/O library, to handle asynchronous tasks and provide an event loop.

`;

// Writing information to the nodejs_architecture.txt file
fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) {
    console.error('Error writing to nodejs_architecture.txt:', err);
  } else {
    console.log('Information about Node.js architecture has been added to nodejs_architecture.txt');
  }
});
