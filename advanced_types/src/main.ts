let array1 = ["a", "b", "c"];

let array2 = ["a", "b", 3];

let array3 = ["a", 3, true];

// array1.push(4); // Error - array1 is an array of strings
array2.push(4); // OK
array3.push(4); // OK
array2[0] = 4; // OK
array2.unshift(4); // OK

let tuple1: [string, string, string] = ["a", "b", "c"];

let tuple2: [string, string, number] = ["a", "b", 3];

let tuple3: [string, number, boolean] = ["a", 3, true];

tuple3[0] = "b"; // OK

// tuple3[0] = 4; // Error - tuple3[0] is a string

array3 = tuple3; // OK - tuple3 is a subtype of array3

// tuple3 = array3; // Error - array3 is not a subtype of tuple3

let object1 = {};

// console.log(typeof object1); // object

let object2 = { name: "John", age: 32 };

object2.name = "Jane"; // OK

// object2.name = 30; // Error - object2.name is a string

object1 = array1; // OK

// console.log(typeof object1); // object - an array is an object

type Person1 = {
  name: string;
  age: number;
};

let person1: Person1 = { name: "Eddie", age: 33 };

person1 = object2; // OK

type Person2 = {
  name: string;
  age?: number;
};
let person2: Person2 = { name: "Jimmy" };

// person2 = object1; // Error - object1 is not a Person
// person1 = person2; // Error - person2.age is optional

const greetPerson = (person: Person2) => {
  console.log(`Hello ${person.name}`); // OK
  // console.log(`Hello ${person.name}`); // OK
  // console.log(`age ${person.age.toString()}`); // Error - person.age is optional
  // console.log(`${person.name} age is ${person.age?.toString()}`); // OK
  if (person.age) {
    console.log(`${person.name} age is ${person.age.toString()}`); // OK
  }
};

greetPerson(person1); // OK - person1 is a Person2
greetPerson(person2); // OK

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // 1
