import isValid from "date-fns/isValid";

export default class Todo {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }

  getName() {
    return this.name;
  }

  getDate() {
    return this.dueDate;
  }

  isValidDate() {
    return isValid(this.dueDate);
  }

  getFormattedDate() {
    const formattedDate = new Date(this.dueDate);

    const day = String(formattedDate.getDate()).padStart(2, "0");
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
    const year = formattedDate.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
