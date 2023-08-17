import Storage from "./Storage";

export default class UI {
  static loadPage() {
    UI.loadProjects();
    UI.innitSubmitBtns();
    UI.innitTabsBtns();
    UI.handleInboxBtn();
  }

  static innitSubmitBtns() {
    const submitTodoBtn = document.getElementById("submit-todo-btn");
    const submitProjectBtn = document.getElementById("submit-project-btn");

    submitTodoBtn.addEventListener("click", () => UI.handleSubmitTodoBtn());
    submitProjectBtn.addEventListener("click", () =>
      UI.handleSubmitProjectBtn()
    );
  }

  static innitTabsBtns() {
    const inboxBtn = document.getElementById("inbox-btn");
    const todayBtn = document.getElementById("today-btn");
    const upcomingBtn = document.getElementById("upcoming-btn");

    inboxBtn.addEventListener("click", () => UI.handleInboxBtn());
    todayBtn.addEventListener("click", () => UI.handleTodayBtn());
    upcomingBtn.addEventListener("click", () => UI.handleUpcomingBtn());
  }

  static handleInboxBtn() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    const createTodoBtn = UI.createTodoBtn();
    main.append(createTodoBtn);

    const allProjects = document.querySelectorAll(".projects");
    allProjects.forEach((project) => {
      project.classList.remove("active");
    });

    Storage.getTodoApp()
      .getProjects()
      .forEach((project) => {
        const allTodos = project.getTodos();
        allTodos.forEach((todo) => {
          const todoName = todo.getName();
          const todoDate = todo.getFormattedDate();
          main.insertBefore(
            UI.createTodo(project.name, todoName, todoDate),
            createTodoBtn
          );
        });
      });
  }

  static handleTodayBtn() {
    const main = document.getElementById("main");
    main.innerHTML = "";

    Storage.getTodoApp()
      .getProjects()
      .forEach((project) => {
        const todayTodos = project.getTodayTodos();
        todayTodos.forEach((todo) => {
          const todoName = todo.getName();
          const todoDate = todo.getFormattedDate();
          main.append(UI.createTodo(project.name, todoName, todoDate));
        });
      });
  }

  static handleUpcomingBtn() {
    const main = document.getElementById("main");
    main.innerHTML = "";

    Storage.getTodoApp()
      .getProjects()
      .forEach((project) => {
        const upcomingTodos = project.getUpcomingTodos();
        upcomingTodos.forEach((todo) => {
          const todoName = todo.getName();
          const todoDate = todo.getFormattedDate();
          main.append(UI.createTodo(project.name, todoName, todoDate));
        });
      });
  }

  static handleSubmitTodoBtn() {
    const todoModal = document.getElementById("todo-modal");
    const todoNameInput = document.getElementById("todo-name-input");
    const todoDateInput = document.getElementById("todo-date-input");

    const activeProject = document.querySelector(".active");

    if (activeProject && todoNameInput.value !== "") {
      const activeProjectName = activeProject.children[0].textContent;

      Storage.addTodo(
        activeProjectName,
        todoNameInput.value,
        new Date(todoDateInput.value)
      );

      todoNameInput.value = "";
      todoDateInput.value = "";
    } else if (!activeProject && todoNameInput.value !== "") {
      Storage.addTodo(
        "Default",
        todoNameInput.value,
        new Date(todoDateInput.value)
      );

      todoNameInput.value = "";
      todoDateInput.value = "";
    }

    todoModal.classList.replace("block", "hidden");
    UI.loadTodos();
  }

  static handleSubmitProjectBtn() {
    const projectNameInput = document.getElementById("project-name-input");
    const projectModal = document.getElementById("project-modal");

    if (projectNameInput.value === "") return;

    Storage.addProject(projectNameInput.value);
    projectNameInput.value = "";

    projectModal.classList.replace("block", "hidden");
    UI.loadProjects();
  }

  static loadProjects() {
    const projectMenu = document.getElementById("projects-menu");
    const projectList = document.getElementById("project-list");
    const openProjectModalBtn = document.getElementById("add-project-btn");

    openProjectModalBtn.addEventListener("click", () =>
      UI.displayProjectModal()
    );

    projectList.innerHTML = "";
    projectList.appendChild(openProjectModalBtn);

    projectMenu.addEventListener("click", function () {
      if (projectList.classList.contains("open")) {
        projectList.classList.replace("open", "hidden");
      } else if (projectList.classList.contains("hidden")) {
        projectList.classList.replace("hidden", "open");
      }
    });

    Storage.getTodoApp()
      .getProjects()
      .forEach((project) => {
        if (project.name !== "Default") {
          projectList.insertBefore(
            UI.createProject(project.name),
            openProjectModalBtn
          );
        }
      });
  }

  static loadTodos() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    const createTodoBtn = UI.createTodoBtn();
    main.append(createTodoBtn);

    const activeProject = document.querySelector(".active");
    if (activeProject) {
      const activeProjectName = activeProject.children[0].textContent;

      Storage.getTodoApp()
        .getProject(activeProjectName)
        .getTodos()
        .forEach((todo) => {
          const todoName = todo.getName();
          const todoDate = todo.getFormattedDate();
          main.insertBefore(
            UI.createTodo(activeProjectName, todoName, todoDate),
            createTodoBtn
          );
        });
    } else {
      Storage.getTodoApp()
        .getProject("Default")
        .getTodos()
        .forEach((todo) => {
          const todoName = todo.getName();
          const todoDate = todo.getFormattedDate();
          main.insertBefore(
            UI.createTodo("Default", todoName, todoDate),
            createTodoBtn
          );
        });
    }
  }

  static displayProjectModal() {
    const projectModal = document.getElementById("project-modal");
    projectModal.classList.replace("hidden", "block");

    window.addEventListener("click", (e) => {
      if (e.target == projectModal)
        projectModal.classList.replace("block", "hidden");
    });
  }

  static displayTodoModal() {
    const todoModal = document.getElementById("todo-modal");
    todoModal.classList.replace("hidden", "block");

    window.addEventListener("click", (e) => {
      if (e.target == todoModal) todoModal.classList.replace("block", "hidden");
    });
  }

  static createProject(projectNameInput) {
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("div");
    const projectDeleteBtn = document.createElement("div");

    projectDiv.classList =
      "projects flex items-center justify-between hover:cursor-pointer h-10 w-[70%] rounded-md hover:bg-slate-100";

    projectName.textContent = projectNameInput;

    projectDeleteBtn.textContent = "X";
    projectDeleteBtn.classList =
      "flex justify-center items-center h-[100%] w-[20%] hover:bg-red-500 hover:text-white rounded-md";
    projectDeleteBtn.addEventListener("click", () => {
      Storage.removeProject(projectName.textContent);
      UI.loadProjects();
    });

    projectDiv.addEventListener("click", () => {
      const allProjects = document.querySelectorAll(".projects");
      allProjects.forEach((project) => {
        project.classList.remove("active");
      });

      projectDiv.classList.add("active");
      UI.loadTodos();
    });

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(projectDeleteBtn);
    return projectDiv;
  }

  static createTodo(projectName, todoName, todoDate) {
    const todo = document.createElement("div");
    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");
    const text = document.createElement("p");
    const date = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList =
      "appearance-none h-6 w-6 hover:bg-slate-100 cursor-pointer border border-slate-300 mr-3 rounded-full";

    date.textContent = todoDate;
    text.textContent = todoName;

    todo.classList =
      "flex justify-between w-[70%] border-b border-b-slate-300 p-1 mt-10";
    leftSide.classList = "flex max-w-[80%]";
    rightSide.classList = "text-green-500 w-fit";

    checkbox.addEventListener("click", () =>
      UI.deleteTodo(projectName, todoName)
    );

    todo.appendChild(leftSide);
    todo.appendChild(rightSide);
    leftSide.appendChild(checkbox);
    leftSide.appendChild(text);
    rightSide.appendChild(date);

    return todo;
  }

  static deleteTodo(projectToDeleteFrom, todoName) {
    const project = Storage.getTodoApp().projects.find(
      (project) => project.name === projectToDeleteFrom
    );
    Storage.removeTodo(project.name, todoName);
    UI.loadTodos();
  }

  static createTodoBtn() {
    const btn = document.createElement("button");
    const text = document.createElement("p");

    btn.id = "add-todo-btn";
    btn.classList = "flex w-[40%] p-2 mt-10 rounded-md hover:bg-slate-100";
    text.classList = "ml-6";
    text.textContent = "+ New To-do";

    btn.appendChild(text);

    btn.addEventListener("click", () => {
      UI.displayTodoModal();
    });

    return btn;
  }
}
