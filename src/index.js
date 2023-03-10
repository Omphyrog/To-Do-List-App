import Project from "./project";
import Todo from "./todo";

const TodoApp = {
  projects: [],
  defaultProject: null,

  init() {
    // Create a default project to which all todos will be added
    this.defaultProject = new Project("Inbox");
    this.projects.push(this.defaultProject);
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

  addTodoToProject(todo, project = null) {
    if (project) {
      project.addTodo(todo);
    } else {
      this.defaultProject.addTodo(todo);
    }
  },
};

TodoApp.init();

const newTodo = new Todo("hehe", "696969", "high");
const anotherTodo = new Todo("not hehe", "21942", "low");
const newProject = TodoApp.addProject("not hehe");

TodoApp.addTodoToProject(newTodo, newProject);
TodoApp.addTodoToProject(anotherTodo);

console.log(TodoApp.projects);
