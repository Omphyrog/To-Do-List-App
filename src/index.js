const inboxButton = document.getElementById("inbox");
const todayButton = document.getElementById("today");
const weekButton = document.getElementById("week");
const section = document.querySelector(".section");

function loadInbox() {
  const header = createHeader("Inbox");
  const button = createAddButton();
  const div = document.createElement("div");
  const input = document.createElement("input");

  input.classList.add("input");

  section.appendChild(header);
  section.appendChild(button);
}

function createAddButton() {
  const addButton = document.createElement("button");

  addButton.className = "btn add-btn";
  addButton.id = "section-button";
  addButton.innerHTML = "<i class='fa-sharp fa-solid fa-plus'></i> Add task";

  return addButton;
}

function createHeader(text) {
  const header = document.createElement("h1");
  header.id = "section-header";
  header.textContent = text;
  return header;
}

loadInbox();
