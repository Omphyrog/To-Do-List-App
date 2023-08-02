import "./style.css";
import TodoApp from "./TodoApp";

const todoApp = new TodoApp();

const inboxBtn = document.getElementById("inboxBtn");
const todayBtn = document.getElementById("todayBtn");
const upcomingBtn = document.getElementById("upcomingBtn");
const submitProject = document.getElementById("submitProject");
const projectInput = document.getElementById("projectInput");
const submitTodo = document.getElementById("submitTodo");
const todoInput = document.getElementById("todoInput");
const dateInput = document.getElementById("dateInput");
const main = document.getElementById("main");
const projectMenu = document.getElementById("projects-menu");
const projectList = document.getElementById("project-list");
const openProjectModalBtn = document.getElementById("add-project-btn");
const projectModal = document.getElementById("new-project-modal");
const todoModal = document.getElementById("new-todo-modal");

inboxBtn.addEventListener("click", () => {
  main.innerHTML = "";
  const allProjects = document.querySelectorAll(".projects");
  allProjects.forEach((project) => {
    project.classList.remove("active");
  });
  // const todos = todoApp.getAllTodos();
  // todos.forEach(function (todo) {
  //   const todoName = todo.getName();
  //   const todoDate = todo.formatDate();
  //   main.appendChild(createTodo(todoName, todoDate));
  // });
  const projects = todoApp.getAllProjects();
  projects.forEach((project) => {
    const todos = project.getTodos();
    todos.forEach((todo) => {
      const todoName = todo.getName();
      const todoDate = todo.formatDate();
      main.appendChild(createTodo(todoName, todoDate));
    });
  });
  main.appendChild(createTodoBtn());
});

todayBtn.addEventListener("click", () => {
  main.innerHTML = "";
  const projects = todoApp.getAllProjects();
  projects.forEach((project) => {
    const todayTodos = project.getTodayTodos();
    if (todayTodos.length > 0) {
      todayTodos.forEach((todo) => {
        const todoName = todo.getName();
        const todoDate = todo.formatDate();

        main.appendChild(createTodo(todoName, todoDate));
      });
    }
  });
});

upcomingBtn.addEventListener("click", () => {
  main.innerHTML = "";
  const projects = todoApp.getAllProjects();
  projects.forEach((project) => {
    const todayTodos = project.getUpcomingTodos();
    if (todayTodos.length > 0) {
      todayTodos.forEach((todo) => {
        const todoName = todo.getName();
        const todoDate = todo.formatDate();

        main.appendChild(createTodo(todoName, todoDate));
      });
    }
  });
});

projectMenu.addEventListener("click", function () {
  if (projectList.classList.contains("open")) {
    projectList.classList.replace("open", "hidden");
  } else if (projectList.classList.contains("hidden")) {
    projectList.classList.replace("hidden", "open");
  }
});

openProjectModalBtn.addEventListener("click", function () {
  projectModal.classList.replace("hidden", "block");
});

window.addEventListener("click", function (event) {
  if (event.target == projectModal) {
    projectModal.classList.replace("block", "hidden");
  } else if (event.target == todoModal) {
    todoModal.classList.replace("block", "hidden");
  }
});

submitProject.addEventListener("click", function () {
  if (projectInput.value === "") {
    return alert("Please enter a project name.");
  }
  todoApp.addProject(projectInput.value);
  projectList.insertBefore(
    createProject(projectInput.value),
    openProjectModalBtn
  );
  projectInput.value = "";
  projectModal.classList.replace("block", "hidden");
  projectList.classList.replace("hidden", "open");
});

submitTodo.addEventListener("click", function () {
  if (todoInput.value === "") {
    return alert("Please enter todo name.");
  }

  const activeProject = document.querySelector(".active");

  if (!activeProject) {
    todoApp.addTodoToDefaultProject(todoInput.value, dateInput.value);
  } else {
    const project = todoApp.getProject(activeProject.textContent);
    project.addTodo(todoInput.value, dateInput.value);
  }

  renderPage();
  todoInput.value = "";
  dateInput.value = "";
  todoModal.classList.replace("block", "hidden");
});

function createProject(nameInput) {
  const project = document.createElement("div");
  project.classList =
    "projects hover:cursor-pointer w-[40%] p-2 rounded-md hover:bg-slate-100";

  project.textContent = nameInput;

  project.addEventListener("click", function () {
    const allProjects = document.querySelectorAll(".projects");
    allProjects.forEach((project) => {
      project.classList.remove("active");
    });

    project.classList.add("active");

    main.innerHTML = "";
    const thisProject = todoApp.getProject(project.textContent);
    const thisProjectTodos = thisProject.getTodos();
    thisProjectTodos.forEach((todo) => {
      const todoName = todo.getName();
      const todoDate = todo.formatDate();

      main.appendChild(createTodo(todoName, todoDate));
    });
    main.appendChild(createTodoBtn());
  });

  return project;
}

function createTodo(textInput, dateInput) {
  const todo = document.createElement("div");
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");
  const text = document.createElement("p");
  const date = document.createElement("p");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList =
    "appearance-none h-6 w-6 hover:bg-slate-100 cursor-pointer border border-slate-300 mr-3 rounded-full";

  checkbox.addEventListener("click", () => {
    const projectName = todoApp.projects.find((project) =>
      project.getProjectName()
    );
    const todoName = projectName.todos.find((todo) => todo.getName());
    projectName.removeTodo(todoName);
    renderPage();
  });

  date.textContent = dateInput;
  text.textContent = textInput;

  todo.classList =
    "flex justify-between w-[70%] border-b border-b-slate-300 p-1 mt-10";
  leftSide.classList = "flex max-w-[80%]";
  rightSide.classList = "text-green-500 w-fit";

  todo.appendChild(leftSide);
  todo.appendChild(rightSide);
  leftSide.appendChild(checkbox);
  leftSide.appendChild(text);
  rightSide.appendChild(date);

  return todo;
}

function createTodoBtn() {
  const btn = document.createElement("button");
  const text = document.createElement("p");

  btn.id = "add-todo-btn";
  btn.classList = "flex w-[40%] p-2 mt-10 rounded-md hover:bg-slate-100";
  text.classList = "ml-6";
  text.textContent = "+ New To-do";

  btn.appendChild(text);

  btn.addEventListener("click", () => {
    todoModal.classList.replace("hidden", "block");
  });

  return btn;
}

function renderPage() {
  main.innerHTML = "";
  const activeProject = document.querySelector(".active");
  if (!activeProject) {
    // const todos = todoApp.getAllTodos();
    // todos.forEach(function (todo) {
    //   const todoName = todo.getName();
    //   const todoDate = todo.formatDate();
    //   main.appendChild(createTodo(todoName, todoDate));
    // });
    const projects = todoApp.getAllProjects();
    projects.forEach((project) => {
      const todos = project.getTodos();
      todos.forEach((todo) => {
        const todoName = todo.getName();
        const todoDate = todo.formatDate();
        main.appendChild(createTodo(todoName, todoDate));
      });
    });
  } else {
    const project = todoApp.getProject(activeProject.textContent);
    const todos = project.getTodos();
    todos.forEach(function (todo) {
      const todoName = todo.getName();
      const todoDate = todo.formatDate();
      main.appendChild(createTodo(todoName, todoDate));
    });
  }
  main.appendChild(createTodoBtn());
}

renderPage();
