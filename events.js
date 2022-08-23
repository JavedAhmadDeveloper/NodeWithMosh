const EventEmitter = require("events");
const emitter = new EventEmitter();
//Listener for event

emitter.on("messagedLogged", (e) => {
  console.log("Listener called", e);
});

//Raise an event
emitter.emit("messagedLogged", { id: 1, url: "https://" });
