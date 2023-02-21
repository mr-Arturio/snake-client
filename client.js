const net = require("net");

const connect = function () { //establishing conection
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });


  conn.on("connect", () => { //message after connection established
    console.log('Successfully connected to game server!');
    //sending a Name to the server
    
        conn.write('Name: ART');
    // setInterval(() => {
    // conn.write("Move: left");
    // conn.write("Move: up");
    //  conn.write("Move: right");
    // conn.write("Move: down");
    // }, 100);
   
  });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 500);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 1000);
  // });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
     });

  return conn;
};

module.exports = connect;