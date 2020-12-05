function socket(io) {
 
  io.on('connection', function(socket) {
    console.log("user connected123");
  })
}

module.exports = socket;