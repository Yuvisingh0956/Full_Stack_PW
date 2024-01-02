// For question 3

const fs = require('fs');

fs.readFile('nodejs_architecture.txt','utf8', (err, data) => {
    if(err){
        console.log('Error in opening file: ', err);
    } else{
        console.log(data);
    }
})