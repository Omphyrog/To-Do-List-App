import TodoApp from "./TodoApp";
import Project from "./Project";
import Todo from "./Todo";

export default class Storage {
  static saveTodoApp(data) {
    localStorage.setItem("todoApp", JSON.stringify(data));
  }

  static getTodoApp() {
    const todoApp = Object.assign(
      new TodoApp(),
      JSON.parse(localStorage.getItem("todoApp"))
    );

    todoApp.setProjects(
      todoApp
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todoApp
      .getProjects()
      .forEach((project) =>
        project.setTodos(
          project.getTodos().map((todo) => Object.assign(new Todo(), todo))
        )
      );

    return todoApp;
  }

  static addProject(project) {
    const todoApp = Storage.getTodoApp();
    todoApp.addProject(project);
    Storage.saveTodoApp(todoApp);
  }

  static removeProject(projectName) {
    const todoApp = Storage.getTodoApp();
    todoApp.removeProject(projectName);
    Storage.saveTodoApp(todoApp);
  }
}
