var url = "http://mylogger.io/log";
const eventEmitter = require("events");

class Logger extends eventEmitter {
  log(message) {
    //send http requst
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

function sayHello(name) {
  console.log("Hello " + name);
}

console.log(__dirname);
console.log(__filename);

module.exports = { Logger, sayHello };
