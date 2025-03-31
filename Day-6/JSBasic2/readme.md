#### 1] Why Do We Use Functions in JavaScript?
->Functions in JavaScript are used to organize, reuse, and simplify code. They help make programs more structured, efficient, and maintainable
#### 2] What is Function Invocation in JavaScript?
-> Function Invocation means calling (executing) a function so that the code inside it runs.
#### 3] Does a Function Behave Like an Object in JavaScript?
-> Yes! In JavaScript, functions are first-class objects, meaning they can:
Be assigned to variables
Have properties and methods
Be passed as arguments and returned from other functions
function myFunction() {
    console.log("I am a function!");
}
myFunction.sayHello = function() {
    console.log("Hello from inside the function!");
};
myFunction();          
myFunction.sayHello(); 
#### 4] What are Events in JavaScript?
Events in JavaScript are actions or occurrences that happen in the browser, such as clicking a button, hovering over an element, typing in a field, or loading a page. JavaScript can detect and respond to these events using event listeners.

#### 5] What is a String in JavaScript?
A string in JavaScript is a sequence of characters enclosed in single ('), double ("), or backticks (`). It is a primitive data type used to represent text.

#### 6] What is an Array in JavaScript?
An array in JavaScript is a special variable that can hold multiple values in a single variable. These values can be of different types (numbers, strings, objects, etc.)
JavaScript arrays are dynamic. This means:

You don’t need to define a fixed size.

You can add or remove elements at any time.

#### 7] Difference Between Map and Set in JavaScript
->A Map is a collection of key-value pairs, where each key is unique, and it stores the insertion order of the keys whereas Set is a collection of unique values, where each value can only occur once, and it also stores the insertion order of the values.

-> Map Stores key-value pairs, where keys can be of any data type, and each key maps to a specific value. whereas Stores unique values without duplicates. The values are automatically deduplicated.
#### 8] Difference between Array and Map?
An array is a sorted list of elements indexed by integers. A map is a list of key-value pairs indexed by the key. The arrays get node is the maps find node. In an array, you get the element by it's index.

#### 9] What are Array Methods in JavaScript?
Array methods in JavaScript are built-in functions that allow you to perform operations on arrays. These operations can include modifying the array, accessing elements, and transforming the data in the array

a few names:-
push()
pop()
shift()
unshift()
forEach()
map()
slice()

#### 10] In how many ways can we traverse through an array in Javascript?
### for loop-> 
When you need full control over the loop, including indices.
### forEach()->
When you want a cleaner, functional way to loop through elements.
### map()->
When you need to transform the array into a new array.
### for…of loop->	
When you want a simple, modern syntax without needing indexes.
### for…in loop	->
Not recommended for arrays, but useful for objects.
### reduce()->
When you need to accumulate or reduce array elements into a single value