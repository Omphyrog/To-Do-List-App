import Project from "./Project";

export default class TodoApp {
  constructor() {
    (this.projects = []), this.projects.push(new Project("Default"));
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name))
      return;
    this.projects.push(new Project(newProject));
  }

  getProject(projectName) {
    return this.projects.find(
      (project) => project.getProjectName() === projectName
    );
  }

  removeProject(projectName) {
    const projectToDelete = this.projects.find(
      (project) => project.getProjectName() === projectName
    );
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }

  addTodoToDefaultProject(todoName, dueDate) {
    const defaultProject = this.projects.find(
      (project) => project.getProjectName() === "Default"
    );
    if (defaultProject) {
      defaultProject.addTodo(todoName, dueDate);
    }
  }

  // getAllTodos() {
  //   const allTodos = [];
  //   for (const project of this.projects) {
  //     allTodos.push(...project.todos);
  //   }
  //   return allTodos;
  // }

  getAllProjects() {
    return this.projects;
  }
}
