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


const kName = "Karl"
const karlNew = `I'm ${kName}.`;
console.log(karlNew)

const carYear = 2013;
const carModel = "camry";
const maker = "Toyota";

const description = `The car was made in ${carYear} by ${maker}, and the model is ${carModel}..`
console.log(description)



console.log("BBC Online, formerly known as BBCi,\n\ is the BBC's online service. \n\ It is a large network of websites including \n\  such high-profile sites as BBC News ")


const age = 13;
//const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license !!!!!")
} else {
  const yearLeft = 18 - age;
  console.log(`She is too young to drive. Wait another ${yearLeft} years.`)
}

const birthYear = 1998;
let century = 0;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21
}
console.log(century)

let gas = 1023;
let horsePower = 234;

if (gas > 1010 && horsePower > 213) {
  console.log("Success!!!")
} else {
  console.log("Failed!!")
}



const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's.")
} else {
  console.log("John's BMI is higher than John's.")
}


const inputYear = '1991';
console.log(inputYear + 20);
console.log(Number(inputYear))


console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23))  // NaN = not a number

let a = 35;
let b = String(34);
let c = a + b;
console.log(c)

// Boolean
// Five falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('James'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job")
}

// JS converts 0 to a boolean.

let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined.")
}

// Undefined value is false, 0 is also falsy value.

**/

// == vs ===

const age = 18;
if (age === 18) console.log("You just became an adult :D (Strict)")

if (age == 18) console.log("You just became an adult :D (loose)")

const favorite = prompt("What is your favorite number ? ")
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) {
  console.log("Cool! 23 is good number!!")
} else if (favorite === 7) {
  console.log("7 is lucky number!!  ")
} else if (favorite === 9) {
  console.log("9 is lucky number!!  ")
} else {
  console.log("Number is not 23 or 7 or 9.")
}

if (favorite !== 23 ) console.log("WHy not 23??")