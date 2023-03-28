export default class Todo {
  constructor(name, dueDate = null, priority) {
    this.name = name;
    this.dueDate = new Date(dueDate).toLocaleDateString("en-GB");
    this.priority = priority;
    this.isCompleted = false;
  }

  edit(name, dueDate, priority) {
    this.name = name;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
  }
}
