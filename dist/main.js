/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xuY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla1wiKTtcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25cIik7XG5cbmZ1bmN0aW9uIGxvYWRJbmJveCgpIHtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKFwiSW5ib3hcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbigpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbigpIHtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRCdXR0b24uY2xhc3NOYW1lID0gXCJidG4gYWRkLWJ0blwiO1xuICBhZGRCdXR0b24uaWQgPSBcInNlY3Rpb24tYnV0dG9uXCI7XG4gIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zaGFycCBmYS1zb2xpZCBmYS1wbHVzJz48L2k+IEFkZCB0YXNrXCI7XG5cbiAgcmV0dXJuIGFkZEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRleHQpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIuaWQgPSBcInNlY3Rpb24taGVhZGVyXCI7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmxvYWRJbmJveCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9