const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { json } = require('body-parser');

const app = express();
const ser = http.Server(app);
const soc = socketIo(ser);
const users = {};

soc.on('connection', (socket) => {
    users[socket.request._query.clientid] = socket.id
        // console.log(socket.request._query.clientid);
    socket.on('disconnect', () => {
        console.log("用户" + socket.id + "断开连接");
    });
    console.log("用户" + socket.id + "连接");
    socket.on('messageevent', (data) => {
        // console.log('data= ' + JSON.stringify(data));
        // soc.to(users[data.sourceClientId] + "").emit('push messageevent', data);
        soc.to(users[data.targetClientId] + "").emit('push messageevent', data);
    })
})

ser.listen(8081);