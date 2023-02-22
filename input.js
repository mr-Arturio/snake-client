let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
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
  if(key === 'w'){
    connection.write("Move: up")
  }
  if(key === 'a'){
    connection.write("Move: left")
  }
  if(key === 's'){
    connection.write("Move: down")
  }
  if(key === 'd'){
    connection.write("Move: right")
  }
};

module.exports = { setupInput };