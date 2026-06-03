const numbers = [10, 20, 30, 40, 50];

// map()
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter()
const greaterThan25 =
    numbers.filter(num => num > 25);
console.log("Greater than 25:", greaterThan25);

// forEach()
numbers.forEach(num => {
    console.log(num);
});