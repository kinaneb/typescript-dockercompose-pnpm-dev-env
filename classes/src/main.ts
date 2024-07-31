// class Developer {
//   public readonly name: string;
//   private age: number;
//   protected language: string = "TypeScript";
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public getAge(): number {
//     return this.age;
//   }
// }

class Developer {
  constructor(
    public readonly name: string,
    private age: number,
    protected language: string = "TypeScript"
  ) {
    this.name = name;
    this.age = age;
  }
  public getAge(): number {
    return this.age;
  }
}

const developer = new Developer("John", 30);

console.log(developer.name); // John
console.log(developer.getAge()); // 30
// console.log(developer.age); // Error - Property 'age' is private and only accessible within class 'Developer'.

// --------------------------------------------

class WebDeveloper extends Developer {
  constructor(public framework: string, name: string, age: number) {
    super(name, age);
    this.framework = framework;
  }
  public getLanguage(): string {
    return `${this.name} is a ${this.language} web developer`;
  }
}
const webDeveloper = new WebDeveloper("React", "John", 30);

// --------------------------------------------
interface BackendDeveloper {
  name: string;
  age: number;
  can(code: string): void;
}

class NodeDeveloper implements BackendDeveloper {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  can(code: string): void {
    console.log(`${this.name} can code in ${code}`);
  }
}
const nodeDeveloper = new NodeDeveloper("John", 30);
console.log(nodeDeveloper.name); // John
nodeDeveloper.can("Node.js"); // John can code in Node.js

// --------------------------------------------

class Human {
  static count: number = 0;
  public getCount(): number {
    return Human.count;
  }
  public idNumber: number;
  constructor(public name: string) {
    this.name = name;
    this.idNumber = ++Human.count;
  }
}

const person1 = new Human("John");
// console.log(person1.idNumber); // 1
const person2 = new Human("Jane");
// console.log(person2.idNumber); // 2

console.log(Human.count); // 2

// --------------------------------------------

class GetterAndSetter {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "string")
    ) {
      this.dataState = value;
    } else {
      throw new Error("Parameter must be an array of strings");
    }
  }
}

const getterAndSetter = new GetterAndSetter();
getterAndSetter.data = ["John", "Jane"];
console.log(getterAndSetter.data); // ['John', 'Jane']
getterAndSetter.data = [1, 2]; // Error - Parameter must be an array of strings
