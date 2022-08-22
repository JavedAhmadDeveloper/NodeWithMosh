const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messagedLogged", { id: 1, url: "https://" });
  }
}
module.exports = Logger;
