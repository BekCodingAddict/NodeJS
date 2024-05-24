var url = "http://mylogger.io/log";

function log(message) {
  //send http requst
  console.log(message);
}

function sayHello(name) {
  console.log("Hello " + name);
}

console.log(__dirname);
console.log(__filename);

module.exports = { log, sayHello };
