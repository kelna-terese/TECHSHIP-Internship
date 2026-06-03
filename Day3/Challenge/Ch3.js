const employees = [
    {  id: 1,
        name: "Renu",
        department: "IT"},
    {   id: 2,
        name: "Jithu",
        department: "HR"},
    {id: 3,
        name: "Geetha",
        department: "IT"}];
// All employee names
employees.forEach(employee => {
    console.log(employee.name);
});
// IT Department employees
const itEmployees =
    employees.filter(
        employee => employee.department === "IT");
console.log(itEmployees);