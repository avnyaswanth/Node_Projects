// sync calls and async calls

// callbacks allows to delay the execution of a fun
// until a particular time or event has occured

// delaying the execution of a func depending on the requirement is called
// async calls

function greet(name) {
    console.log(`Hello ${name}`)
}

function greetPerson(greetFn) {
    const name = 'hacker'
    greetFn(name);
}

greetPerson(greet)