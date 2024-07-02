type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Person1 = {
  name: string;
  age?: number;
  likedAlbums: stringOrNumberArray; // (string | number)[];
  toString: Person1ToString;
};
type Person1ToString = () => string;

type PersonId = stringOrNumber;

let myName: "Alice";

// myName = "Bob"; // Error: Type '"Bob"' is not assignable to type '"Alice"'.

let userNames: "Alice" | "Bob";

userNames = "Alice"; // OK
userNames = "Bob"; // OK
// userNames = "Eve"; // Error: Type '"Eve"' is not assignable to type '"Alice" | "Bob"'.

let person1: Person1 = {
  name: "Alice",
  age: 30,
  likedAlbums: ["Thriller", "Bad"],
};
let person2: Person1 = {
  name: "Bob",
  likedAlbums: [1, 2, 3],
};

const concatPerson = (person1: Person1, person2: Person1): Person1 => {
  return {
    name: person1.name + person2.name,
    age: person1.age && person2.age ? person1.age + person2.age : undefined,
    likedAlbums: [...person1.likedAlbums, ...person2.likedAlbums],
    toString: () => {
      return `Name: ${person1.name + " & " + person2.name} , Age: ${
        person1.age && person2.age ? person1.age + person2.age : "unknown"
      }, Liked Albums: ${[...person1.likedAlbums, ...person2.likedAlbums]}`;
    },
  };
};

const logMessage = (message: any): void => {
  console.log(message);
};
logMessage("Hello, TypeScript!");
logMessage(concatPerson(person1, person2).toString());
logMessage(concatPerson(person1, person2).name);
