interface MyType {
  property1: string;
  property2: number;
  property3?: boolean;
}

const updateMyType = (
  myType: MyType,
  propertiesToUpdate: Partial<MyType>
): MyType => {
  return {
    ...myType,
    ...propertiesToUpdate,
  };
};

const myType: MyType = {
  property1: "Hello",
  property2: 42,
  property3: true,
};
console.log(myType);
const updatedMyType = updateMyType(myType, { property1: "World" });
console.log(updatedMyType);
console.log(myType);

// Required

const nonNullableProperty = (myType: Required<MyType>): MyType => {
  console.log(myType);
  return myType;
};
nonNullableProperty({ property1: "Hello", property2: 42, property3: true });

const readOnlyMyType: Readonly<MyType> = { ...myType, property3: true };

// readOnlyMyType.property3 = false; // Error because property3 is readonly
// nonNullableProperty(readOnlyMyType);

const myType2: Record<string, string> = {
  property1: "value1",
  property2: "value2",
};

type Properties = "property1" | "property2";
type Values = "value1" | "value2";

const myType3: Record<Properties, Values> = {
  property1: "value1",
  property2: "value2",
  //   property3: "value2", // Error because property3 is not in Properties
};

type MyTypeFirstTwoProperty = Pick<MyType, "property1" | "property2">;

type MyTypeWithoutProperty3 = Omit<MyType, "property3">;

type MyTypeFirstTwoPropertyBeta = Extract<MyType, "property1" | "property2">;

type MyTypeWithoutProperty3Beta = Exclude<MyType, "property3">;

const myTypeWithoutProperty3Beta: MyTypeWithoutProperty3Beta = {
  property1: "Hello",
  property2: 42,
};

type AllPropertiesPossibilities =
  | "property1"
  | "property2"
  | "property3"
  | null
  | undefined;

type ValuesPropertiesPossibilities = NonNullable<AllPropertiesPossibilities>;

const typeFromConstructorFunction = (property1: string, property2: number) => {
  return {
    property1,
    property2,
  };
};

type MyTypeFromConstructorFunction = ReturnType<
  typeof typeFromConstructorFunction
>;

const myTypeFromConstructorFunction: MyTypeFromConstructorFunction =
  typeFromConstructorFunction("Hello", 42);

console.log(myTypeFromConstructorFunction);

type MyTypeFromConstructorFunctionParameters = Parameters<
  typeof typeFromConstructorFunction
>;

const myTypeFromConstructorFunctionParameters: MyTypeFromConstructorFunctionParameters =
  ["Hello", 42];

console.log(myTypeFromConstructorFunctionParameters);

const typeFromConstructorFunctionInstance: MyTypeFromConstructorFunction =
  typeFromConstructorFunction(...myTypeFromConstructorFunctionParameters);

console.log("**", typeFromConstructorFunctionInstance);

// ----------------------------

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUser = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .catch((error) => console.error(error));
  return response;
};

type FetchReturnTypes = Awaited<ReturnType<typeof fetchUser>>;

fetchUser().then((users) => {
  console.log(users);
});
