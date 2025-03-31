function swap(obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
}

let numbers = { a: 10, b: 20 };
console.log("Before swapping:", numbers);

swap(numbers);

console.log("After swapping:", numbers);
