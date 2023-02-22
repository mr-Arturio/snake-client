const { connect } = require('./client');// establishes a connection with the game server
const { setupInput } = require('./input');// setup interface to handle user input from stdin

console.log("Connecting ...");
connect();

setupInput();