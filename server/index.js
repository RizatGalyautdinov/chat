const express = require('express');
const app = express();

const PORT = 2000;
const http = require('http').Server(app);

const cors = require('cors');
const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

app.get('api', (req, res) => {
    res.json({
        message: 'test'
    });
});

const users = [];

socketIO.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('new-user', (data) => {
        users.push(data);
        socketIO.emit('response-new-user', users);
    })

    socket.on('message', (data) => {
        console.log('message', data);
        socketIO.emit('response', data)
    })

    socket.on('logout', (data) => {
        const index = users.findIndex(user => {
            return user.user === data.user && user.socketID === data.socketID;
        });
        if (index !== -1) {
            users.splice(index, 1);
        }
        socketIO.emit('response-new-user', users);
        console.log(`User ${socket.id} disconnected`);
    })

    socket.on('disconnect', (socket) => {
        console.log(`User ${socket.id} disconnected`);
    })
});

http.listen(PORT, () => {
    console.log("Server was started");
});
