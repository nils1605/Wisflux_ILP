### 1]What are anonymous functions in JavaScript?
In JavaScript, anonymous functions are functions that do not have a name. They are often used in places where functions are passed as arguments or assigned to variables.
### 2] Explain strict comparison and Abstract comparison in javascript?
Strict comparison checks both value and type. It does not perform type conversion.
Abstract comparison converts types if necessary before making the comparison.
### 3] Difference b/w arrow functions and regular functions?
Both arrow functions and regular functions are used to define functions, but they have key differences in syntax, this binding, arguments handling, and more.
1. Regular functions have their own this based on how they are called. whereas an arrow functions inherit this from their surrounding scope (lexical this).
2. Regular functions can be used as constructors (new Function()) whereas an arrow functions CANNOT be used as constructors.
3. Regular functions have access to the special arguments object whereas an arrow functions do not have their own arguments, but they can use the rest parameter (...args).
### 4] What is Hoisting in JavaScript?
Hoisting is a JavaScript mechanism where variable and function declarations are moved (hoisted) to the top of their scope before code execution.
However, only declarations are hoisted, not initializations
### 5] JavaScript is a garbage collected programming language, explain how?
Yes! JavaScript is a garbage-collected programming language, meaning it automatically manages memory so developers don’t have to manually allocate and free memory, unlike languages like C or C++.

Garbage Collection (GC) is the process of automatically reclaiming memory occupied by objects that are no longer in use, preventing memory leaks and improving performance.
JavaScript’s Garbage Collector (GC) mainly uses the Mark-and-Sweep Algorithm.
Mark-and-Sweep Algorithm
#### Mark Phase:
The GC starts from the root (global scope, window, globalThis).

It marks all reachable objects as "in use".
#### Sweep Phase:

It removes objects that are not marked, freeing memory.
### 6] Explain Shallow copy vs Deep copy in Javascript?
In JavaScript, copying objects or arrays can be done in two ways: shallow copy and deep copy. The key difference lies in how nested objects are handled.
#### shallow copy: 
A shallow copy creates a new object, but only copies references for nested objects instead of duplicating them.
#### Deep Copy:
A deep copy creates an entirely new object, duplicating all values, including nested objects.

### 7] What is Object.freeze
Object.freeze() is a method in JavaScript that prevents an object from being modified. It makes the object immutable, meaning:

You cannot add new properties.

You cannot remove existing properties.

You cannot modify existing properties.

You cannot reassign properties to another value.
