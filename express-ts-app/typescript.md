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
