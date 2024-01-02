// For Question 4

const fs = require('fs');

// Additional advantages of Node.js
const additionalAdvantages = `
Additional Advantages of Node.js:

1. High Performance:
   - Node.js is built on the V8 engine, which compiles JavaScript code to machine code, resulting in high performance and faster execution.

2. Scalability:
   - Node.js is designed to be scalable, making it suitable for building applications that need to handle a large number of simultaneous connections.

3. Rich Ecosystem:
   - Node.js has a vibrant ecosystem with a vast collection of open-source packages available through npm. Developers can easily find and use third-party modules to enhance their applications.

4. Cross-Platform:
   - Node.js is cross-platform, allowing developers to write code that can run on various operating systems with minimal modifications.

5. Community Support:
   - Node.js has a large and active community of developers, which means there is extensive documentation, tutorials, and community support available.

`;

// Appending advantages to the nodejs_architecture.txt file
fs.appendFile('nodejs_architecture.txt', additionalAdvantages, (err) => {
  if (err) {
    console.error('Error appending to nodejs_architecture.txt:', err);
  } else {
    console.log('Advantages added to nodejs_architecture.txt');
  }
});
