import isValid from "date-fns/isValid";

export default class Todo {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = new Date(dueDate);
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.dueDate;
  }

  formatDate() {
    if (!isValid(this.dueDate)) {
      return "";
    }

    const date = this.dueDate;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
