type First = string;
type Second = string | number;
type Third = "First";

let a: First = "Hello";
let d = <First>"world";
let b = a as Second;
let c = a as Third;
// let d = a as number; // Error: Type 'string' is not assignable to type 'number'.

const sumOrConcat = (
  a: number,
  b: number,
  c: "sum" | "concat"
): number | string => {
  if (c === "sum") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

let customValue: string = sumOrConcat(2, 3, "concat") as string; // already know the return type
let customValue2 = sumOrConcat(2, 3, "concat") as number; // Error: Type 'string' is not assignable to type 'number'. but TS will not catch this error

const image1 = document.querySelector("img")!;
const image2 = document.querySelector("img") as HTMLImageElement;
const image3 = document.getElementById("#image1") as HTMLImageElement;
const image4 = <HTMLImageElement>document.getElementById("#image1");

const year1 = document.getElementById("year") as HTMLSpanElement;
const year2: string = new Date().getFullYear().toString();
year1.setAttribute("data-year", year2);
year1.textContent = year2;
