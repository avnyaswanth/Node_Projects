const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("order-pizza", (size, toppings) => {
    console.log(`order received ! baking a ${size} pizza with ${toppings} toppings.`)
})

emitter.on("order-pizza", (size) => {
    if(size == "large")
        console.log("add a complimentary drink !!")
})

console.log("before the event has occured!!!")

emitter.emit("order-pizza", "large", "paneer")


// event allows us to create our custom event and respond to them in a non blocking manner