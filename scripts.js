console.log("hello world.")

// JS have several data structures to group together data that can be used based on your project. Here is an example of an Object:
var person = {
  name: "Ro-Bot",
  speak: function() {
    console.log(`My name is ${this.name}, at your service.`)
  }
}
person.speak()

// There are 3 way to create a variable in JS. The main difference is scope, where you can access them.
var myRobot = "Sally"
let myCat = "Whiskers"
const myDog = "Fido"

// To create a function in JS you use the function keyword. You can also pass parameters/arguments to the functions.
function whatIsYourName(pet) {
  console.log("My owner named me " + pet + ".")
}
whatIsYourName(myCat)

// JS has a way to handle conditional statements and execute code based on if the condition is true/false.
const age = 18
if (age >= 18) {
  console.log("You can rent our cars.")
} else {
  console.log("You are not old enough to rent from us.")
}

// If you need to do something more that once, you can use a loop construct to repeat a given operation.
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// There are several primitive data types in JS, here are a few:
const number = 3 // type of number
const greet = "Hello there!" // type of string
const isFoodReady = true // type of boolean
let iAmNotAssignedyet // type of undefined
