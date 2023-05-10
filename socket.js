// socket.js
const { Server } = require('socket.io');

let messages = []; // Store chat messages

const setupSocket = (server) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    // Send chat history to the client
    socket.emit('chat history', messages);

    socket.on('chat message', (msg) => {
      messages.push(msg); // Add new message to chat history
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  return io;
};

module.exports = setupSocket;
