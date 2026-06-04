document.getElementById("addBtn").addEventListener("click", function () {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {

        taskSpan.classList.add("completed");

        completeBtn.remove();

    });

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {

        li.remove();

    });

    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
});