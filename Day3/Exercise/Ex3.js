const students = [
    "Kelna",
    "Janet",
    "Milin",
    "Jeeva",
    "Nourin",
    "Lakshmi",
    "prabhu",
    "Sharath",
    "Joseph",
    "Bestinamol"
];

console.log("All Students:");
students.forEach(student => {
    console.log(student);
});
console.log("Total Students:", students.length);
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);