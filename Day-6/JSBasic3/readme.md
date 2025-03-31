### Objects in Javsacript

->An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.

1. Creation Using Object Literal
The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.
2. Creation Using new Object() Constructor

JavaScript objects are a powerful and flexible way to store and manage data. They can be created using literals, constructors, or classes and can be manipulated in various ways. Understanding objects is essential for mastering JavaScript, as they are the foundation of many advanced concepts like prototypes, OOP, and JSON.
### 2] Yes! Below is the class-based alternative using JavaScript's ES6 class syntax:

class Vector {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    // Setter methods
    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    // Getter methods
    getX() {
        return this._x;
    }

    getY() {
        return this._y;
    }

    static create(x, y) {
        return new Vector(x, y);
    }
}
let vector1 = Vector.create(10, 20);

console.log(vector1.getX()); // Output: 10
console.log(vector1.getY()); // Output: 20

### 3] Is JavaScript the Language of the Future?
JavaScript has been one of the most dominant and widely used programming languages for over two decades. Given its versatility, continuous evolution, and widespread adoption, it is highly likely to remain a key language in the future. However, whether it will be the language of the future depends on various factors.