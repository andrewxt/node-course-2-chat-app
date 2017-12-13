var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'hanna',
    text: 'hey love'
  });
});

socket.on('newMessage', function (message) {
  console.log('New message received', message);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
