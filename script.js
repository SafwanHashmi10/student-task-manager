
let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";

    displayTasks();
}


function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="completeTask(${index})"
            >

            ${task.text}

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });

    updateCounters();
}


function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}


function updateCounters() {

    let total = tasks.length;

    let completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    let pending = total - completed;

    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("pendingTasks").textContent = pending;
}