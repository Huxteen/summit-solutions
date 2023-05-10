// public/talk.js
var socket = io();

// Get the talk ID from the URL
var path = window.location.pathname;
var parts = path.split('/');
var room = parts[parts.length - 1];

// Join the room
socket.emit('join room', room);

// Listen for chat history
socket.on('chat history', function(history){
  for (let msg of history) {
    $('#messages').append($('<li>').text(msg));
  }
});

// Send a chat message
$('form').submit(function(e){
  e.preventDefault(); // prevents page reloading
  socket.emit('chat message', room, $('#m').val());
  $('#m').val('');
  return false;
});

// Receive a chat message
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
