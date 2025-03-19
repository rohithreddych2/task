let taskStack = [];
function addTask() {
const taskName = document.getElementById("task-name").value;
if (taskName.trim() !== "") {
taskStack.push(taskName);
document.getElementById("task-name").value = "";
displayTasks();
} else {
alert("Please enter a task name.");
}
}
function undoTask() {
if (taskStack.length > 0) {
taskStack.pop();
displayTasks();
} else {
alert("No tasks to undo.");
}
}
function displayTasks() {
const taskList = document.getElementById("task-list");
taskList.innerHTML = "";
if (taskStack.length > 0) {
taskList.textContent = taskStack.join(', ');
} else {
taskList.textContent = "No tasks in the stack.";
}
}
