/* eslint-disable object-curly-newline */
const { Server } = require('socket.io');
const debug = require('debug')('api:socket');

const LIVE_SESSION_PREFIX = 'live-session';
const CLASS_STUDENT_PREFIX = 'class-student';
const io = {};

const SOCKET_EVENTS = {
  LS_CREATE: `${LIVE_SESSION_PREFIX}-create`,
  LS_OFFER: `${LIVE_SESSION_PREFIX}-offer`,
  LS_ANSWER: `${LIVE_SESSION_PREFIX}-answer`,
  LS_JOIN: `${LIVE_SESSION_PREFIX}-join`,
  LS_LEAVE: `${LIVE_SESSION_PREFIX}-leave`,
  CS_ONLINE: `${CLASS_STUDENT_PREFIX}-online`,
  CS_OFFLINE: `${CLASS_STUDENT_PREFIX}-offline`,
  CS_LEAVED: `${CLASS_STUDENT_PREFIX}-leaved`,
  CS_LIST: `${CLASS_STUDENT_PREFIX}-list`,
};
let usersInRoom = [];

const joinRoom = async (socket, { roomId, userId }) => {
  if (!roomId || !userId) return false;
  try {
    const users = await getJoinedUsers(roomId, userId);
    const host = users.find((user) => user.isHost);

    let session = false;
    if (host.id !== userId) {
      session = await joinSession(roomId, userId);
      if (!session) return false;
    } else session = true;

    socket.join(userId);
    socket.join(roomId);
    return session;
  } catch (error) {
    debug('error:: joinRoom', error);
    return false;
  }
};

const createRoom = async (socket, { roomId, userId }) => {
  if (!roomId || !userId) return false;
  try {
    const users = await getJoinedUsers(roomId, userId);

    let session = false;
    if (!users.length) {
      session = await startSession(roomId, userId);
      if (!session) return false;
    } else session = true;

    socket.join(userId);
    socket.join(roomId);
    return session;
  } catch (error) {
    debug('error:: createRoom', error);
    return false;
  }
};

const leaveRoom = async (socket, { roomId, userId }) => {
  if (!roomId || !userId) return;
  try {
    await leaveSession(roomId, userId);
    socket.leave(roomId);
    socket.leave(userId);
  } catch (error) {
    debug('error:: leaveRoom', error);
    throw Error('Room not found or User not joined this room');
  }
};
module.exports = {
  init: (server) => {
    io.current = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      },
    });
    io.current.on('connection', (socket) => {
      debug('socket id:', socket.id);
      io.socket = socket;
      socket.on(
        SOCKET_EVENTS.LS_CREATE,
        async ({ roomId, userId }, callback) => {
          debug(SOCKET_EVENTS.LS_CREATE, { roomId, userId });
          const createdSession = createRoom(socket, { roomId, userId });
          if (!createdSession && callback) {
            callback({ error: 'roomCreateError' });
          }
          const users = await getJoinedUsers(roomId, userId);
          debug(SOCKET_EVENTS.LS_CREATE, { users });
          if (callback) callback({ users });
        }
      );

      socket.on(SOCKET_EVENTS.LS_JOIN, async ({ roomId, userId }, callback) => {
        debug(SOCKET_EVENTS.LS_JOIN, { roomId, userId });
        const joinedSession = joinRoom(socket, { roomId, userId });
        if (!joinedSession && callback) callback({ error: 'roomJoinError' });
        const users = await getJoinedUsers(roomId, userId);
        debug(SOCKET_EVENTS.LS_JOIN, { users });
        if (callback) {
          callback({ users, isExistingSession: joinedSession !== true });
        }
      });

      socket.on(
        SOCKET_EVENTS.LS_OFFER,
        ({ signal, toUserId, userId, isHost }) => {
          debug(SOCKET_EVENTS.LS_OFFER, socket.id, {
            toUserId,
            userId,
            isHost,
          });
          io.current.to(toUserId).emit(SOCKET_EVENTS.LS_OFFER, {
            signal,
            fromUserId: userId,
            isHost,
          });
        }
      );

      socket.on(
        SOCKET_EVENTS.LS_ANSWER,
        ({ signal, toUserId, userId, isHost }) => {
          debug(SOCKET_EVENTS.LS_ANSWER, socket.id, { toUserId, isHost });
          debug('sending answer', { userId, isHost });
          io.current.to(toUserId).emit(SOCKET_EVENTS.LS_ANSWER, {
            signal,
            fromUserId: userId,
            isHost,
          });
        }
      );

      socket.on(SOCKET_EVENTS.LS_LEAVE, async ({ roomId, userId, isHost }) => {
        debug('leave', { roomId, userId, isHost });
        await leaveRoom(socket, { roomId, userId });
        socket
          .to(roomId)
          .emit(SOCKET_EVENTS.LS_LEAVE, { fromUserId: userId, isHost });
      });

      socket.on(SOCKET_EVENTS.CS_ONLINE, async ({ roomId, user }) => {
        socket.join(roomId);
        const checked = usersInRoom.some(
          (item) => item.up_id_userprofile === user.up_id_userprofile
        );
        if (!checked && user.up_id_typeuserprofile === 2) {
          const newUser = user;
          newUser.socketId = socket.id;
          usersInRoom.push(newUser);

          // console.log(notifications);
        }

        io.current.to(roomId).emit(SOCKET_EVENTS.CS_LIST, usersInRoom);
      });

      socket.on(SOCKET_EVENTS.CS_OFFLINE, async ({ roomId, userId }) => {
        // console.log('\n\n\n\n\n\n\n\n\n\nuser: offline');

        usersInRoom = usersInRoom.filter(
          (item) => item.up_id_userprofile !== userId
        );
        // console.log(usersInRoom);

        io.current.to(roomId).emit(SOCKET_EVENTS.CS_LEAVED, usersInRoom);
      });

      socket.on('disconnect', async () => {
        debug('disconnect', socket.id);
        socket.rooms.forEach(async (roomId) => {
          if (roomId.startsWith(LIVE_SESSION_PREFIX)) {
            await leaveRoom(socket, {
              roomId,
              // TODO add auth to get userId or add socketId to to participants db
              // userId:
            });
          }
        });
      });
    });
  },
  io,
};
