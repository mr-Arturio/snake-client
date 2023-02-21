const connect = require('./client')// establishes a connection with the game server

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin; // stdin object  will allow us to listen for keyboard input and react to it.
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
// ctrl + c to exit
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();

console.log("Connecting ...");
connect();