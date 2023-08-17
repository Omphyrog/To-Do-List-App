import Todo from "./Todo";
import { isPast, isToday } from "date-fns";

export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  getProjectName() {
    return this.name;
  }

  addTodo(textInput, dateInput) {
    const newTodo = new Todo(textInput, dateInput);
    this.todos.push(newTodo);
  }

  removeTodo(name) {
    const todoToRemove = this.todos.find((todo) => todo.getName() === name);
    this.todos.splice(this.todos.indexOf(todoToRemove), 1);
  }

  setTodos(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  getTodayTodos() {
    return this.todos.filter((todo) => {
      const todoDate = new Date(todo.getDate());
      return isToday(todoDate);
    });
  }

  getUpcomingTodos() {
    return this.todos.filter((todo) => {
      const todoDate = new Date(todo.getDate());
      return !(isPast(todoDate) || isToday(todoDate));
    });
  }
}
