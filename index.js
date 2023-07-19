const server = require('./app');

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, ()=>{
    console.log('Me encuentro en el servidor')
})