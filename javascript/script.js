
// Variables -> container for holding values
// let pi = 3.14;
// console.log(pi);
// let a = 10;
// let b = 10;
// let sum = a + b;
// console.log(sum);

// const pi = 3.14;
// pi = 15;

var varKey;
a = 10;
var b = 10;
let c = 10;
const d = 10;
let name = "john";
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);
let x = "5" + 2 + 3;
console.log(x);

console.log(varKey);
{
  let undec = "Name";
}
// console.log(undec);

const fruits = ["Apple", "Mango", "Orange"];
fruits.push("Pineapple");

const student = {
  name: "John Doe",
  class: "",
  "sub category": "SUB",
};

console.log(student.name);
console.log(student["sub category"]);
console.log(new Date(Date.now()));

const carsArr = ["Volvo", "BMW"];
console.log(carsArr[1]);

function sum(a, b) {
  const sum = a + b;
  return sum;
}

const total = sum(5, 5);
const total1 = sum(5, 10);
const total2 = sum(5, 15);
console.log(total);
console.log(total1);
console.log(total2);

function roleChecker(role) {
  if (role == "Admin") {
    console.log("Admin - All Permissions");
  } else if (role == "User") {
    console.log("User - Read Only Permissions");
  } else {
    console.log("Invalid Role");
  }
}
roleChecker("Manager");

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  start: function () {
    console.log(this.type, "Model", this.model, "Started....");
  },
  stop: function () {
    console.log(this.type);
  },
};

car.name = "new car";
car.start();
car.stop();

console.log(car);

let immutable = "Immutable String";
immutable = "New Value";
immutable = "Immutable String";

let mutable = immutable;
mutable = "New Vau=lue";
console.log(immutable, mutable);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person.eyeColor;

// Create a copy
const newObj = person;

// Change Age in both
newObj.age = 10;

console.log(person, newObj);

const Student = {
  firstName: "John",
  lastName: "Doe",
  address: {
    city: "Khategaon",
    district: "Dewas",
    state: "Madhya Pradesh",
  },
  hobbies: ["Singing"],
  isActive: true,
};

for (let student in Student) {
  console.log(Student[student]);
}

console.log(Student.address.city.toLowerCase());

Student.newMethod = function () {};

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

  this.greetings = function () {};
}

const person1 = new Person("John", "Doe", 50, "Blue");
const person2 = new Person("Jane", "Doe", 45, "Blue");
person1.newprp = "nrew";
console.log(person1);
console.log(person2);

const randomArr = ["One", 1, false];
randomArr[0] = "Two";
console.log(typeof randomArr);
function print(value) {
  console.log(value);
}
randomArr.forEach(print);
randomArr.push("1");
console.log(randomArr);
console.log(Array.isArray(person1));

// push(items) ->
// randomArr.push("One");
// console.log(randomArr);
// pop()
// randomArr.pop();
// console.log(randomArr);

// unshift()
// randomArr.unshift(5);
// console.log(randomArr);

// shift()
randomArr.shift();
console.log(randomArr);
const textArr = [1, [2, 3]];
console.log(randomArr.flat);

const iteration = [1, 2, 3, 4, 5];

const reducedArr = iteration.reduce((total, value) => value + total, 5);
console.log(reducedArr);
// 1 -> 1 + 0 -> 1
// 2 -> 2 + 1 -> 3
// 3 -> 3 + 3 -> 6
// 4 -> 4 + 6 -> 10
// 5 -> 5 + 10 -> 15
// 15

// const newArr = iteration.map((value, index) => {
//   console.log(value);
//   return value;
// });

const into2 = iteration.flatMap((value) => value * 2);

const filteredArr = into2.filter((value) => value > 6);

// iteration.forEach((value, index, array) => {
//   console.log(value);
// });
console.log(filteredArr);

const numbers = [45, 4, 9, 16, 25];
const newNumber = [...numbers];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 45;
}
console.log(newNumber);

const trial = Array.from("ABCDEFG");

for (let x of numbers) {
  console.log(x);
}

const object = { name: "Keshav" };

console.log(object?.name?.length);

const age = 17;
const role = "admin";

if (role === "admin") {
  console.log("You Have All Permissions");
} else if (role === "manager") {
  console.log("You Have Some Permissions");
} else {
  console.log("You Don't Have Any Permissions");
}

switch (role) {
  case "admin":
    console.log("You Have All Permissions");
    break;
  case "manager":
    console.log("You Have Some Permissions");
    break;
  default:
    console.log("You Don't Have Any Permissions");
    break;
}
