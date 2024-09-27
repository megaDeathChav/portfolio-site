// outdated js convention. Use let and const instead
var dontUse: boolean = false;

// Basic types let lets you reassign a variable
let isDone: boolean = false;
const decimal: number = 6;
let color: string = "blue";

// Arrays
const list: number[] = [1, 2, 3];
const fruits: Array<string> = ['apple', 'banana', 'cherry'];

// Tuple
const x: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
const c: Color = Color.Green;

// Any
const notSure: any = 4;
notSure = "maybe a string instead";

// Void (usually used as the return type of functions that don't return a value)
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined
const u: undefined = undefined;
const n: null = null;




// Interfaces and Types

// Interface

// describes a basic user object structure
interface User {
  name: string;
  age: number;
}

// Type alias
type UserType = {
  name: string;
  age: number;
};

// Both can be used to define an object structure
const user1: User = { name: "Alice", age: 30 };
const user2: UserType = { name: "Bob", age: 25 };

// Extending interfaces
interface Employee extends User {
  employeeId: number;
}

// Extending types
type EmployeeType = UserType & {
  employeeId: number;
};

// Interfaces can be merged
interface User {
  email: string;
}

// Types cannot be merged
// type UserType = { email: string }; // This would cause an error

// Interfaces are open to extension
interface Window {
  customProperty: string;
}

// Using a type alias with unions
type Status = "pending" | "approved" | "rejected";

// Interfaces cannot use unions directly
// interface Status = "pending" | "approved" | "rejected"; // This would cause an error

// Complex type aliases
type Tree<T> = {
  value: T;
  left: Tree<T> | null;
  right: Tree<T> | null;
};

// example usage

// A tree of numbers
const numberTree: Tree<number> = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
};

// A tree of strings
const stringTree: Tree<string> = {
  value: "root",
  left: {
    value: "left child",
    left: null,
    right: null
  },
  right: null
};


// Interfaces can also use generics

interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

// Usage is the same as with the type alias
const numberTreeNode: TreeNode<number> = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: null
};


// Interfaces can describe callable types
interface ClickHandler {
  (event: MouseEvent): void;
}

// So can type aliases
type ClickHandlerType = (event: MouseEvent) => void;


// Utility function example
function calculateTotal(prices: number[]): number {
  return prices.reduce((total, price) => total + price, 0);
}

// API helper function example
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
}

// Approach 1: React.FC with separate interface
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting1: React.FC<GreetingProps> = ({ name, age }) => {
  return <p>Hello, {name}! {age && `You are ${age} years old.`}</p>
};

// Approach 2: Inline prop typing
const Greeting2 = ({ name, age }: { name: string; age?: number }) => {
  return <p>Hello, {name}! {age && `You are ${age} years old.`}</p>
};

// Approach 3: Separate interface without React.FC
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting3 = ({ name, age }: GreetingProps) => {
  return <p>Hello, {name}! {age && `You are ${age} years old.`}</p>
};

// Approach 4: Type alias instead of interface
type GreetingPropsType = {
  name: string;
  age?: number;
};

const Greeting4 = ({ name, age }: GreetingPropsType) => {
  return <p>Hello, {name}! {age && `You are ${age} years old.`}</p>
};
// Component using standard function declaration
function Greeting({ name, age }: GreetingProps) {
  return <p>Hello, {name}! {age && `You are ${age} years old.`}</p>
}

// Component with children using React.FC
const LayoutFC: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>My Website</header>
      <main>{children}</main>
      <footer>© 2024</footer>
    </div>
  );
};

// Component with children using standard function declaration
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>My Website</header>
      <main>{children}</main>
      <footer>© 2024</footer>
    </div>
  );
}


// 1. Spreading arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'grape'];
console.log(moreFruits); // ['orange', 'apple', 'banana', 'grape']

// 2. Copying arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// 3. Concatenating arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// 4. Spreading objects
const person = { name: 'Alice', age: 30 };
const extendedPerson = { ...person, job: 'Developer' };
console.log(extendedPerson); // { name: 'Alice', age: 30, job: 'Developer' }

// 5. Copying objects
const originalObject = { x: 1, y: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { x: 1, y: 2 }

// 6. Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 3, c: 4 }

// 7. Function arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 8. Spreading string
const greeting = 'Hello';
const charArray = [...greeting];
console.log(charArray); // ['H', 'e', 'l', 'l', 'o']

// 9. React component props
type ButtonProps = {
  text: string;
  onClick: () => void;
};

const defaultProps = { color: 'blue', size: 'medium' };

function Button({ text, onClick, ...restProps }: ButtonProps & typeof defaultProps) {
  return <button onClick={onClick} {...restProps}>{text}</button>;
}

// Usage
<Button text="Click me" onClick={() => console.log('Clicked!')} {...defaultProps} />

// Interfaces for classes
interface Printable {
  print(): void;
}

class Book implements Printable {
  print() {
    console.log("Printing book...");
  }
}

// Type aliases for classes

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PersonType = Person;

const john: PersonType = new Person("John", 30);