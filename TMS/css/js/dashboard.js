let tasks = getTasks();

let editTaskId = null;

const taskForm =
document.getElementById("taskForm");

const taskContainer =
document.getElementById("taskContainer");

const searchInput =
document.getElementById("searchInput");

const filterStatus =
document.getElementById("filterStatus");

const logoutBtn =
document.getElementById("logoutBtn");

const welcomeMessage =
document.getElementById("welcomeMessage");

/* =========================
CHECK LOGIN
========================= */

const currentUser =
getCurrentUser();

if (!currentUser) {

window.location.href =
"login.html";

}

/* =========================
WELCOME USER
========================= */

welcomeMessage.innerText =
`Welcome, ${currentUser.fullName}!`;

/* =========================
LOGOUT
========================= */

logoutBtn.addEventListener(
"click",
function () {

    logoutUser();

    window.location.href =
    "login.html";

}

);

/* =========================
RENDER TASKS
========================= */

function renderTasks(taskList = tasks) {

taskContainer.innerHTML = "";

if (taskList.length === 0) {

    taskContainer.innerHTML =
    "<p>No Tasks Found</p>";

    return;
}

taskList.forEach(task => {

    taskContainer.innerHTML += `

    <div class="task-card">

        <h3>${task.title}</h3>

<p>${task.description}</p>

<p class="status-badge ${task.status.replace(/\s+/g,'-')}">
    ${task.status}
</p>

<div class="task-buttons">
            <button
            onclick="editTask(${task.id})">
            Edit
            </button>

            <button
            onclick="deleteTask(${task.id})">
            Delete
            </button>

        </div>

    </div>

    `;

});

}

/* =========================
ADD / UPDATE TASK
========================= */

taskForm.addEventListener(
"submit",
function (e) {

    e.preventDefault();

    const title =
    document.getElementById(
    "taskTitle"
    ).value.trim();

    const description =
    document.getElementById(
    "taskDescription"
    ).value.trim();

    const status =
    document.getElementById(
    "taskStatus"
    ).value;

    if (
        title === "" ||
        description === ""
    ) {

        alert(
        "Please fill all fields"
        );

        return;
    }

    if (editTaskId !== null) {

        const task =
        tasks.find(
            task =>
            task.id === editTaskId
        );

        task.title =
        title;

        task.description =
        description;

        task.status =
        status;

        editTaskId = null;

    }

    else {

        const task = {

            id: Date.now(),

            title,

            description,

            status

        };

        tasks.push(task);

    }

    saveTasks(tasks);

    renderTasks();

    taskForm.reset();

}

);

/* =========================
EDIT TASK
========================= */

function editTask(id) {

const task =
tasks.find(
    task => task.id === id
);

if (!task) return;

document.getElementById(
"taskTitle"
).value =
task.title;

document.getElementById(
"taskDescription"
).value =
task.description;

document.getElementById(
"taskStatus"
).value =
task.status;

editTaskId = id;

window.scrollTo({

    top: 0,

    behavior: "smooth"

});

}

/* =========================
DELETE TASK
========================= */

function deleteTask(id) {

tasks =
tasks.filter(
    task => task.id !== id
);

saveTasks(tasks);

renderTasks();

}

/* =========================
SEARCH TASK
========================= */

searchInput.addEventListener(
"keyup",
function () {

    const keyword =
    this.value.toLowerCase();

    const filtered =
    tasks.filter(task =>

        task.title
        .toLowerCase()
        .includes(keyword)

    );

    renderTasks(filtered);

}

);

/* =========================
FILTER TASK
========================= */

filterStatus.addEventListener(
"change",
function () {

    const selected =
    this.value;

    if (
        selected === "All"
    ) {

        renderTasks();

        return;
    }

    const filtered =
    tasks.filter(task =>

        task.status === selected

    );

    renderTasks(filtered);

}

);

/* =========================
INITIAL LOAD
========================= */

renderTasks();