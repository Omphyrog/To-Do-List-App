export default class Todo {
  constructor(text, dueDate = null, priority) {
    this.text = text;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }

  edit(text, dueDate, priority) {
    this.text = text;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  markComplete() {
    this.isCompleted = true;
  }
}
