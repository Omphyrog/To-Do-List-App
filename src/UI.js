import Storage from "./Storage";

export default class UI {
  static renderPage() {
    UI.loadProjects();
  }

  static loadProjects() {
    const projectMenu = document.getElementById("projects-menu");
    const projectList = document.getElementById("project-list");
    const openProjectModalBtn = document.getElementById("add-project-btn");
    const projectModal = document.getElementById("new-project-modal");
    const submitProject = document.getElementById("submitProject");

    openProjectModalBtn.addEventListener("click", () =>
      projectModal.classList.replace("hidden", "block")
    );

    window.addEventListener("click", (e) => {
      if (e.target == projectModal)
        projectModal.classList.replace("block", "hidden");
    });

    submitProject.addEventListener("click", () => {
      UI.addProject();
      projectModal.classList.replace("block", "hidden");
    });

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
    // console.log(Storage.getTodoApp());
  }

  static addProject() {
    const projectInput = document.getElementById("projectInput");
    Storage.addProject(projectInput.value);
    projectInput.innerHTML = "";
    UI.loadProjects();
  }

  static createProject(projectNameInput) {
    const projectDiv = document.createElement("div");
    const projectLeftSide = document.createElement("div");
    const projectRightSide = document.createElement("div");

    projectDiv.classList =
      "projects flex items-center justify-between hover:cursor-pointer h-10 w-[70%] rounded-md hover:bg-slate-100";

    projectLeftSide.textContent = projectNameInput;

    projectRightSide.textContent = "X";
    projectRightSide.classList =
      "flex justify-center items-center h-[100%] w-[20%] hover:bg-red-500 hover:text-white rounded-md";
    projectRightSide.addEventListener("click", () => {
      Storage.removeProject(projectLeftSide.textContent);
      UI.loadProjects();
    });

    // projectDiv.addEventListener("click", UI.loadTodos(projectDiv.textContent));
    projectDiv.appendChild(projectLeftSide);
    projectDiv.appendChild(projectRightSide);
    return projectDiv;
  }

  //   static loadTodos(projectName) {
  //     const main = document.getElementById("main");
  //     const allProjects = document.querySelectorAll(".projects");
  //     allProjects.forEach((project) => {
  //       project.classList.remove("active");
  //     });

  //     const project = Storage.getTodoApp().getProject(projectName);
  //     project.getTodos().forEach((todo) => main.append(UI.createTodo()));
  //   }

  //   static createTodo() {

  //   }
}
