// globel scope are accessed in browser by window object e.g window.conole.log()  , window.setTimout()
// but we dont have window object in node so they are accessed by
// global e.g global.console.log()

// var name = "Javed";
// // console.log(window.name);  exist in browser
// console.log(global.name); // undefined in global
// function hello(name) {
//   global.console.log(`hello ${name}`); // console is global scope
// }

// hello("javed");

// console.log(module);

// const logger = require("./logger");
// logger.log("this is a message");

// const path = require("path");
// var pathObj = path.parse(__filename);

// console.log(pathObj);

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var type = os.type();
var uptime = os.uptime();
console.log(
  `${freeMemory} is available from ${totalMemory} of OStype ${type} has Up time of ${uptime}`
);
