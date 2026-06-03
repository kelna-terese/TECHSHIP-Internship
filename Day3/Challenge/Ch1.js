const marks = [90, 40, 86, 65, 78];

// Total
const total = marks.reduce((sum, mark) => sum + mark, 0);

// Highest
const highest = Math.max(...marks);

// Lowest
const lowest = Math.min(...marks);

// Average
const average = total / marks.length;

console.log("Total Marks:", total);
console.log("Highest Mark:", highest);
console.log("Lowest Mark:", lowest);
console.log("Average Mark:", average);