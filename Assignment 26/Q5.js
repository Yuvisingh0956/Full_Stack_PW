// For question 5

const fs = require('fs');

// Deleting the nodejs_architecture.txt file
fs.unlink('nodejs_architecture.txt', (err) => {
  if (err) {
    console.error('Error deleting nodejs_architecture.txt:', err);
  } else {
    console.log('File Deleted Successfully');
  }
});