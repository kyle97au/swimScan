let io;

module.exports = {
  init: httpSer => {
    io = require( 'socket.io' )(httpSer, {
      // cors: {origins: '*:*'}
      cors:{origin: '*'}
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized!');
    }
    return io;
  }
};