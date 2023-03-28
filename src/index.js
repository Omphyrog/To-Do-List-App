import Project from "./project";
import renderPage from "./ui";

export const TodoApp = {
  projects: [],
  todayProject: null,
  weekProject: null,

  init() {
    this.todayProject = new Project("Today");
    this.weekProject = new Project("Week");
    this.projects.push(this.todayProject);
    this.projects.push(this.weekProject);
  },

  addProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  },

  removeProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  },

  addTodoToProject(todo, projectName) {
    const project = this.projects.find((p) => p.name === projectName);
    if (project) {
      project.addTodo(todo);
    } else {
      this.defaultProject.addTodo(todo);
    }
  },
};

TodoApp.init();

renderPage();
