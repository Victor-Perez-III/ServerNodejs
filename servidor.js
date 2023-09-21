const http = require('http');
const chalk = require('chalk');

const hostname = 'localhost';
const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const jsonResponse = {
        nombre: 'Victor',

    };

    res.end(JSON.stringify(jsonResponse));
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en:${chalk.green(PORT)}`);
});
