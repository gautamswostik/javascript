/// Starting Core JS

console.log("Start")

/// Basic programming

// Variables

var myName = "Amigo"
let myAge = 27
const myNationality = "Nepali"


var myName = "Swostik"
// Not Allowed
// let myAge = 26 
// const myNationality = "Australia"

// Hoisting

x = 10

console.log(x)

var x

console.log(sum())

function sum(){ 
  return 10 + 20
}

// y = 10

// console.log(y)

// let y


// // Temporal Dead Zone (TDZ)

// console.log(deadVariable)

// deadVariable = "now alive"

// console.log(deadVariable)

// // Functions
// // 

function greet() { 
  console.log("Hello")
}

greet()


const saybye = function () { 
  console.log("bye bye")
}

saybye()

const sayyo = () => { 
  console.log("yo")
}

sayyo()

function adder(a) { 
  return function add(b){ 
    return a + b
  }
}

const a = adder(20)
console.log(a(30))

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

