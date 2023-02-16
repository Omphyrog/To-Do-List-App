/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const addTask = document.getElementById("addtask-btn");
const modal = document.querySelector(".modal");
const submit = document.getElementById("submit");
const text = document.getElementById("text");
const taskField = document.getElementById("task-field");
const date = document.getElementById("date");
const body = document.getElementsByTagName("body");

submit.addEventListener("click", function () {
  displayNewTask();
  modal.style.display = "none";
});

addTask.addEventListener("click", function () {
  modal.style.display = "block";
});

function createTodo(text, dueDate) {
  return { text, dueDate };
}

function createTaskField(taskField, addTask) {
  taskField = document.createElement("main");
  addTask = document.createElement("button");

  taskField.id = "task-field";
  addTask.id = "addtask-btn";

  return { taskField, addTask };
}

function displayNewTask() {
  const mainDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const taskText = document.createElement("p");
  const dueDate = document.createElement("input");
  const checkbox = document.createElement("input");

  let newTodo = createTodo(text.value, date.value);

  taskText.textContent = newTodo.text;
  dueDate.type = "date";
  dueDate.value = date.value;
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  mainDiv.className = "task";
  leftDiv.className = "left";
  rightDiv.className = "right";

  checkbox.addEventListener("click", () => mainDiv.remove());

  taskField.appendChild(mainDiv);
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(rightDiv);
  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(taskText);
  rightDiv.appendChild(dueDate);

  date.value = "";
  text.value = "";
  console.log(newTodo);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkdGFzay1idG5cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIik7XG5jb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZmllbGRcIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRpc3BsYXlOZXdUYXNrKCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0ZXh0LCBkdWVEYXRlKSB7XG4gIHJldHVybiB7IHRleHQsIGR1ZURhdGUgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0ZpZWxkKHRhc2tGaWVsZCwgYWRkVGFzaykge1xuICB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza0ZpZWxkLmlkID0gXCJ0YXNrLWZpZWxkXCI7XG4gIGFkZFRhc2suaWQgPSBcImFkZHRhc2stYnRuXCI7XG5cbiAgcmV0dXJuIHsgdGFza0ZpZWxkLCBhZGRUYXNrIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgbGV0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRleHQudmFsdWUsIGRhdGUudmFsdWUpO1xuXG4gIHRhc2tUZXh0LnRleHRDb250ZW50ID0gbmV3VG9kby50ZXh0O1xuICBkdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IGRhdGUudmFsdWU7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tib3hcIjtcbiAgbWFpbkRpdi5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgbGVmdERpdi5jbGFzc05hbWUgPSBcImxlZnRcIjtcbiAgcmlnaHREaXYuY2xhc3NOYW1lID0gXCJyaWdodFwiO1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtYWluRGl2LnJlbW92ZSgpKTtcblxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuICBsZWZ0RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgbGVmdERpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGRhdGUudmFsdWUgPSBcIlwiO1xuICB0ZXh0LnZhbHVlID0gXCJcIjtcbiAgY29uc29sZS5sb2cobmV3VG9kbyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=