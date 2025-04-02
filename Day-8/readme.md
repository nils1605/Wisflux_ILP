### 1]What are the basic data types in TypeScript
 number – Integer, float, hex, binary, etc.

 string – Text values.

boolean – true or false.

null – Represents an empty value.

undefined – A variable that is declared but not assigned a value.

bigint – Large integers.

symbol – Unique and immutable values.

array – A collection of values of the same type.

tuple – A fixed-length array with different types.

object – Represents a key-value structure.

### 2]What is a Generic Data Type in TypeScript?
A generic data type in TypeScript allows you to write reusable, flexible, and type-safe code by making functions, classes, and interfaces work with multiple types instead of a single fixed type.
#### Syntax of Generics
Generics use angle brackets <T>, where T is a placeholder for a type that will be provided when the function is called.
function identity<T>(value: T): T {

    return value;
}

console.log(identity<number>(10));  
console.log(identity<string>("Hello")); 

 T (Type Parameter) is replaced with an actual type (number, string, etc.) when the function is called.

 ### 3]What is Type Inferring in TypeScript?
Type inferring in TypeScript is the process where TypeScript automatically determines the type of a variable based on the assigned value, without explicitly declaring its type.

### 4]What are the possible ways to define typing for functions.

In TypeScript, you can define function types in multiple ways to ensure type safety and readability. Here are the different approaches:

Use explicit types for better readability.

Use type alias (type) or interface (interface) to reuse function signatures.

Use optional (?) and default parameters to make functions more flexible.

Use rest parameters (...args) for variable-length arguments.

Use overloading when a function handles multiple types.
### 5]How to Define Generic Types for Classes in TypeScript
Generics in classes allow us to create flexible, reusable, and type-safe class structures that work with multiple types instead of being restricted to one fixed type.

Use <T> to define a generic class.

Use multiple types <T, U> for flexible class relationships.

Use extends for constraints (restricts types to specific structures).

Provide default types (T = string) if no type is specified.

Use static generic methods to create reusable utilities.