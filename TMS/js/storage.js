function getUsers() {
return JSON.parse(
localStorage.getItem("users")
) || [];
}

function saveUsers(users) {
localStorage.setItem(
"users",
JSON.stringify(users)
);
}

function getTasks() {
return JSON.parse(
localStorage.getItem("tasks")
) || [];
}

function saveTasks(tasks) {
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function getCurrentUser() {
return JSON.parse(
localStorage.getItem("currentUser")
);
}

function setCurrentUser(user) {
localStorage.setItem(
"currentUser",
JSON.stringify(user)
);
}

function logoutUser() {
localStorage.removeItem(
"currentUser"
);
}