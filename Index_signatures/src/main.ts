// Index Signatures

interface TransactionObject {
  Property1: string;
  Property2: string;
  Property3: string;
}

// interface TransactionObject {
//   readonly [index: string]: string; // Index Signature
// }

// interface TransactionObject {
//   readonly [index: string]: string; // Index Signature
//   readonly Property1: string;
//   readonly Property2: string;
//   readonly Property3: string;
// }

const transaction: TransactionObject = {
  Property1: "Value1",
  Property2: "Value2",
  Property3: "Value3",
};
// transaction.Property1 = "Value4"; // Error: Cannot assign to 'Property1' because it is a read-only property.
console.log(transaction.Property1); // Value1
console.log(transaction["Property2"]); // Value2

let property3: string = "Property3";
// let property4: number = 4;
console.log(transaction[property3 as keyof TransactionObject]); // Value3
const transactionReader = (transaction: TransactionObject) => {
  for (const key in transaction) {
    console.log(key, ": ", transaction[key as keyof TransactionObject]);
    console.log(key, ":: ", transaction[key as keyof typeof transaction]);
  }
};
transactionReader(transaction);
const transactionKeyLogger = (
  transaction: TransactionObject,
  key: keyof TransactionObject
) => {
  console.log(key, "::: ", transaction[key]);
};
transactionKeyLogger(transaction, "Property3");

// ------------------------------

type Propertys = "Property1" | "Property2" | "Property3";
type TransactionObject2 = Record<Propertys, string>;
const transaction2: TransactionObject2 = {
  Property1: "Value1",
  Property2: "Value2",
  Property3: "Value3",
};
//transaction.Property4 = "Value4"; // Error: Property 'Property4' does not exist on type 'TransactionObject2'.
