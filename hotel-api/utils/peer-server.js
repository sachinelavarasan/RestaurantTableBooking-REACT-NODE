const { ExpressPeerServer } = require('peer');

const createPeerServer = (server) => {
  const expressPeerServer = new ExpressPeerServer(server, {
    debug: true,
    path: '/',
  });

  return expressPeerServer;
};

module.exports = { createPeerServer };
