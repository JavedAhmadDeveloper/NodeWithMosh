const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var type = os.type();
var uptime = os.uptime();
console.log(
  `${freeMemory} is available from ${totalMemory} of OStype ${type} has Up time of ${uptime}`
);
