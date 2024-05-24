const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if ((req.url = "/api/course")) {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening port 3000...");

//events
// const eventEmitter = require("events");
// const { Logger } = require("./logger");
// const logger = new Logger();

// // register a listener
// logger.on("messageLogged", function (arg) {
//   console.log("Listener called!", arg.url);
// });

// logger.log("Message");

// reading file reading syncchronous and ayscnchronous and regular way
// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

// const files2 = fs.readdir("./", (err, files) => {
//   if (err) console.log("Error:", err);
//   else console.log("Result:", files);
// });
// console.log(files2);
// const file3 = fs.readFileSync("./FristNodeJS-App/app.js");
// console.log(file3);

//os memory modules
// const os = require("os");
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total:${totalMemory} \n Free:${freeMemory}`);

//for working with path oject
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

//creating and Loading Module
// const logger = require("./logger");
// const { sayHello, log } = logger;

// sayHello("Otabek");
// log("hey");
