//forEach() 
let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum);
//map()
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);
//Filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);
//reduce()
const a = [2, 4, 6];
function sum2(acc, x) {
  return acc + x;
}
const sum1 = a.reduce(sum2, 0);
console.log(sum1);
//include()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");
console.log(fruits);
//some()
const ages1 = [3, 10, 18, 20];

ages1.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
checkAdult();
function isEven(element, index, array) {
    return element % 2 == 0;
}
function func() {
    let arr = [56, 92, 18, 88, 12];

    // Check for even number
    let value = arr.every(isEven);
    console.log(value);
}
func();