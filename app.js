const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("taskList");

// add task on button click
addBtn.addEventListener("click", addTask);
// add task on enter key
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;
  taskList.appendChild(li);
  taskInput.value = "";
}
