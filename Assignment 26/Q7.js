const http = require('http');
const port = 3005;
const hostname = 'localhost';

const server = http.createServer((req,res) => {
    if (req.url=='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end("I Am Happy To Learn Full Stack Web Development From PW Skills!");
    }
});

server.listen(port, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});