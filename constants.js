const IP = 'localhost';
const PORT = 50541;
const Name = 'ART';

const gameMovement = {
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  w: "Move: up"
};

const messages = {
  q: 'Say: sheeesh!',
  e: 'Say: ssspeedy!',
  p: 'Say: sssneaky!'
};

module.exports = {
  IP,
  PORT,
  messages,
  gameMovement,
  Name
};