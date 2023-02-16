const addTask = document.getElementById("addtask-btn");
const modal = document.querySelector(".modal");
const submit = document.getElementById("submit");
const text = document.getElementById("text");
const taskField = document.getElementById("task-field");
const date = document.getElementById("date");
const body = document.getElementsByTagName("body");

submit.addEventListener("click", function () {
  displayNewTask();
  modal.style.display = "none";
});

addTask.addEventListener("click", function () {
  modal.style.display = "block";
});

function createTodo(text, dueDate) {
  return { text, dueDate };
}

function createTaskField(taskField, addTask) {
  taskField = document.createElement("main");
  addTask = document.createElement("button");

  taskField.id = "task-field";
  addTask.id = "addtask-btn";

  return { taskField, addTask };
}

function displayNewTask() {
  const mainDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const taskText = document.createElement("p");
  const dueDate = document.createElement("input");
  const checkbox = document.createElement("input");

  let newTodo = createTodo(text.value, date.value);

  taskText.textContent = newTodo.text;
  dueDate.type = "date";
  dueDate.value = date.value;
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  mainDiv.className = "task";
  leftDiv.className = "left";
  rightDiv.className = "right";

  checkbox.addEventListener("click", () => mainDiv.remove());

  taskField.appendChild(mainDiv);
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(rightDiv);
  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(taskText);
  rightDiv.appendChild(dueDate);

  date.value = "";
  text.value = "";
  console.log(newTodo);
}
