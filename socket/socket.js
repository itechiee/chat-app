function socket(io) {
 
  io.on('connection', function(socket) {
    socket.on("new message", function(data) {
      let chatData = {
        username: data.username,
        message: data.message,
        date: Date.now()
      };

      socket.emit("chat message", chatData);
    })
  })
}

module.exports = socket;