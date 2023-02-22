const net = require("net");
const { IP, PORT, Name } = require("./constants");

const connect = function () { //establishing conection
  const conn = net.createConnection({ //conn object that we using below to interact with the server.
    host: IP,
    port: PORT
  });

  conn.on("connect", () => { //message after connection established
    console.log('Successfully connected to game server!');
    //sending a Name to the server

    conn.write(`Name: ${Name}`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  //print a message indicating that the player has left the game
  conn.on("end", () => {
    console.log(`${Name} has left the game`);
  });

  return conn;
};

module.exports = { connect };