const student = {
    personalInfo: {
        name: "Kelna",
        age: 21},
    courseDetails: {
        course: "BTech CSE"},
    skills: ["HTML", "CSS", "JavaScript"]};
const {
    personalInfo: { name, age },
    courseDetails: { course },
    skills
} = student;
console.log(`
Student Profile
---------------
Name: ${name}
Age: ${age}
Course: ${course}
Skills: ${skills.join(", ")}
`);