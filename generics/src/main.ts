interface HasId {
  id: number;
}

const user = <T extends HasId>(user: T): T => {
  return user;
};
console.log(user({ id: 1, name: "John" }));
// console.log(user({ name: "John" })); // Error: Property 'id' is missing in type '{ name: string; }' but required in type 'HasId'

const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

console.log(getUserProperty(usersArray, "id"));
console.log(getUserProperty(usersArray, "name"));

class StateObject<T> {
  private dataState: T;
  constructor(initialState: T) {
    this.dataState = initialState;
  }
  get state(): T {
    return this.dataState;
  }
  set state(newState: T) {
    this.dataState = newState;
  }
}

const state = new StateObject<string>("initial state");
console.log(state.state);
state.state = "new state";
console.log(state.state);
// state.state = 1; // Error: Type '1' is not assignable to type 'string'
const state2 = new StateObject<number | string>(0);
console.log(state2.state);
state2.state = "new state";
console.log(state2.state);
