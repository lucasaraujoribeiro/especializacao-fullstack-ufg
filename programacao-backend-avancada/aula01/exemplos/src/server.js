const http = require('http');

const server = http.createServer((req, res) => {
    const {method, url} = req;

    console.log(`Method ${method} URL ${url}`)

    return res.end('Hello World!')
});

server.listen(3000);