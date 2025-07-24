# TypeScript Guide

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It provides optional static typing, interfaces, and modern JavaScript features to improve code quality, catch errors early, and make code more maintainable.

---

##  Why TypeScript?

**Static Typing**: Helps detect type-related bugs during development.
**Improved IDE Support**: Autocompletion, navigation, and refactoring.
**Modern JavaScript Features**: Supports ES6+ features.
**Scalability**: Better suited for large-scale applications.

---

##  TypeScript Setup

### 1. Install TypeScript

Install as a development dependency:


bash
  npm install --save-dev typescript
  npx tsc --init
  npm install --save-dev @types/express
  npm install --save-dev typescript ts-node nodemon
  npm install --save-dev @types/node @types/express

## Type Annotations

bash 
let name: string = "Vaishnavi";
let age: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["apple", "banana"];
let user: [string, number] = ["Alice", 30];
let something: any = "hello";
something = 5;
let value: unknown = 10;
if (typeof value === "number") {
  console.log(value.toFixed(2));
}
## Functions in TypeScript
Functions can have typed parameters and return types.
## Basic Function
bash
function greet(name: string): string {
  return `Hello, ${name}`;
}
## Optional Parameters
bash
function log(message: string, userId?: number) {
  console.log(message, userId);
}
## Default Parameters
bash
function add(a: number, b: number = 5): number {
  return a + b;
}
## Return Type Inference
bash
function square(x: number) {
  return x * x; // return type is inferred as number
}

# Classes in Typescript
They are the blueprint for creating objects, encapsulating both data (properties) and behavior (methods) into a single, organized unit.
Key aspects of classes : 
 They can have type annotations to ensure type safety.
 These define the actions or functions that an object can perform.
 Access modifiers : public(Accessible from anywhere), private(Accessible only within the class where they are declared), protected(Accessible within the class and its subclasses)
### Inheritance : 
Classes can extend other classes using the extends keyword, allowing them to inherit properties and methods from a parent class.
 ### Abstraction : 
They can contain abstract methods (methods without implementation) that must be implemented by concrete subclasses.

# Interfaces in Typescript 
They serve as powerful contracts that define the shape and structure of objects within your code.
Are a fundamental tool for ensuring type safety and building robust applications by specifying what properties and methods an object should have, along with their respective types. 
This ensures consistency and helps prevent errors during development.
Interfaces solely focus on the contract and structure of objects; they do not contain any implementation logic, initialization values, or actual function code.