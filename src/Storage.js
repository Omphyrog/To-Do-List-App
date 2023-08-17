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

  static addProject(projectName) {
    const todoApp = Storage.getTodoApp();
    todoApp.addProject(projectName);
    Storage.saveTodoApp(todoApp);
  }

  static removeProject(projectName) {
    const todoApp = Storage.getTodoApp();
    todoApp.removeProject(projectName);
    Storage.saveTodoApp(todoApp);
  }

  static addTodo(projectName, todoName, todoDate) {
    const todoApp = Storage.getTodoApp();
    const project = todoApp.getProject(projectName);
    project.addTodo(todoName, todoDate);
    Storage.saveTodoApp(todoApp);
  }

  static removeTodo(projectName, todoName) {
    const todoApp = Storage.getTodoApp();
    const project = todoApp.getProject(projectName);
    project.removeTodo(todoName);
    Storage.saveTodoApp(todoApp);
  }
}
