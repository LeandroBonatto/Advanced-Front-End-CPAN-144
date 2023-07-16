//Spread operator in JavaScript
const numbers = [8, 3, 5, 2, 1, 9, 7, 6, 4]; 
//Using spread operator we "transforms" the array into a list of elements
const copyNumbers = [...numbers];
//We modify array in place when we use push or pop
//Functional programming is about pure functions
//Push function is impure, because it modifies original array
//Pure function is a function that doesnt produce side effects
//and no matter how many time we call it, the result will be the same
numbers.push(10);
const modifiedNumbers = numbers.concat(12);

//As rule of thumb, prefer pure functions over impure functions
//In terms of arrays, use functions that returns new arrays
//Abstain from methods like push, because they produce side effects
const dozen = [...modifiedNumbers, 13, 14, 15];

const willy = {firstName: 'Willy', lastName: 'Wonka', age: 42};
//By using spread operator in objects we can add new properties to the object
//and we can also modify existing properties by not modifying orignal object
const willyReborn = {...willy, willyReborn: true};
const willyRebornOlder = {...willy, age: 500};
//This approach is not pure, because i modifies the original object
willyReborn.age = 500;

//Array methods
//Filter method returns an array with elements that pass the test
const filteredDozen = dozen.filter((number) => number % 2 === 0);
//Map method returns an array with the results
//of calling a provided function on every element in the array
//Map is also called a transformation function
const doubleDozen = dozen.map((number) => Math.pow(number, 2));
//Array operations can be chained, it would be impossible
//without functional approach
const upgradedDozen = dozen
    .filter((number) => number % 2 === 0)
    .map((number) => Math.pow(number, 2));
//Reduce method reduces the array to a single value
const three = [1, 2, 3];
const sum = three.reduce((acc, number) => acc + number, 6);
console.log(sum);
// 1) accumulator = 0, number = 1
// 2) accumulator = 1, number = 2
// 3) accumulator = 3, number = 3
// 4) accumulator = 6, number = underfined