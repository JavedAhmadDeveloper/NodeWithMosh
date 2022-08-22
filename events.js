const EventEmitter = require("events");
const emitter = new EventEmitter();
//Listener for event

emitter.on("messagedLogged", function () {
  console.log("Listener called");
});

//Raise an event
emitter.emit("messagedLogged");
