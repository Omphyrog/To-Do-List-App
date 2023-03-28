import { TodoApp } from ".";
import Todo from "./todo";

export default function renderPage() {
  const main = document.getElementById("task-field");
  const modal = document.querySelector(".modal");
  const addBtn = document.getElementById("add-btn");
  const inboxBtn = document.getElementById("inbox-btn");
  const todayBtn = document.getElementById("today-btn");
  const weekBtn = document.getElementById("week-btn");
  const projectsBtn = document.getElementById("projects-btn");
  const submitBtn = document.getElementById("submit");

  const textInput = document.getElementById("text");
  const dateInput = document.getElementById("date");

  textInput.setAttribute("required", true);
  dateInput.setAttribute("required", true);

  addBtn.addEventListener("click", () => (modal.style.display = "flex"));
  submitBtn.addEventListener("click", () => {
    modal.style.display = "none";
    addTask(textInput, dateInput);
    showAllTodos(main);
  });

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      textInput.value = "";
      dateInput.value = "";
    }
  });

  inboxBtn.addEventListener("click", () => {
    showAllTodos(main);
  });

  todayBtn.addEventListener("click", () => {
    showTodayTodos(main);
  });

  weekBtn.addEventListener("click", () => {
    showWeekTodos(main);
  });

  projectsBtn.addEventListener("click", () => {
    return;
  });
}

function showAllTodos(main) {
  main.innerHTML = "";
  TodoApp.projects.forEach((project) => {
    project.todos.forEach((todo) => {
      main.append(createTask(todo));
    });
  });
}

function showTodayTodos(main) {
  main.innerHTML = "";
  TodoApp.todayProject.todos.forEach((todo) => {
    main.append(createTask(todo));
  });
}

function showWeekTodos(main) {
  main.innerHTML = "";
  TodoApp.weekProject.todos.forEach((todo) => {
    main.append(createTask(todo));
  });
}

function createTask(todo) {
  const taskDiv = document.createElement("div");
  const taskLeft = document.createElement("div");
  const taskRight = document.createElement("div");
  const name = document.createElement("p");
  const date = document.createElement("p");

  taskDiv.classList = "task";
  taskLeft.classList = "left-side";
  taskRight.classList = "right-side";

  name.textContent = todo.name;
  date.textContent = todo.dueDate;

  taskDiv.append(taskLeft, taskRight);
  taskLeft.append(name);
  taskRight.append(date);

  return taskDiv;
}

function addTask(textInput, dateInput) {
  const today = new Date().toLocaleDateString("en-GB");

  const task = new Todo(textInput.value, dateInput.value);

  if (task.dueDate === today) {
    TodoApp.addTodoToProject(task, "Today");
  } else {
    TodoApp.addTodoToProject(task, "Week");
  }

  textInput.value = "";
  dateInput.value = "";

  console.log(TodoApp.projects);
}
