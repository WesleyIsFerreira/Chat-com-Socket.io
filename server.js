const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//configurando pasta publica (front)
app.use(express.static(path.join(__dirname, 'public')));
//Onde as views vão estar
app.set('views', path.join(__dirname, 'public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) =>{
    res.render('index.html');
});

io.on('connection', socket => {
    console.log(`Socket Conectado: ${socket.id}`);
});

server.listen(3000);