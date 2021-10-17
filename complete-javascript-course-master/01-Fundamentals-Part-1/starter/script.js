/**  
let js = 'amazing';
      if (js === 'amazing')
        alert('JS is fun!!')

let firstName = "John"
let lastName = "Martin"

console.log(firstName + " " + lastName)

let person = "Jane"
let PI = 3.1415;

let me = {
  name: "JBP",
  age: 40,
  education: "master"
}

console.log(me)

// Data Types.

let jsIsFun = true;
console.log(typeof true)
console.log(typeof jsIsFun)
console.log(typeof 23)
console.log(typeof "James")

// let, const and var

let foo = "gogo"
console.log(foo)
foo = 3231
console.log(foo)

const now = 2021
const ageJames = now - 1981
const ageBo = now - 1986
console.log(ageJames, ageBo)

const firstName_1 = "James";
const lastName_1 = "Jeong";

console.log(firstName_1 + lastName_1)

let hoo = 34 ** 2;
hoo += 1;
hoo *= 3
hoo++;
hoo--;
console.log(hoo)

const theYear = 2021;
const ageJohn = theYear - 1981;
const ageJane = theYear - 1990;

console.log(ageJane > ageJohn);


const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(johnBMI, markBMI)
console.log(markHigherBMI)

**/
const kName = "Karl"
const karlNew = `I'm ${kName}.`;
console.log(karlNew)

const carYear = 2013;
const carModel = "camry";
const maker = "Toyota";

const description = `The car was made in ${carYear} by ${maker}, and the model is ${carModel}..`
console.log(description)