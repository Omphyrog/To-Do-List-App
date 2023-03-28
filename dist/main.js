/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoApp": () => (/* binding */ TodoApp)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



const TodoApp = {
  projects: [],
  todayProject: null,
  weekProject: null,

  init() {
    this.todayProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Today");
    this.weekProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Week");
    this.projects.push(this.todayProject);
    this.projects.push(this.weekProject);
  },

  addProject(name) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    this.projects.push(project);
    return project;
  },

  removeProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  },

  addTodoToProject(todo, projectName) {
    const project = this.projects.find((p) => p.name === projectName);
    if (project) {
      project.addTodo(todo);
    } else {
      this.defaultProject.addTodo(todo);
    }
  },
};

TodoApp.init();

(0,_ui__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
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


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function renderPage() {
  const main = document.getElementById("task-field");
  const modal = document.querySelector(".modal");
  const addBtn = document.getElementById("add-btn");
  const inboxBtn = document.getElementById("inbox-btn");
  const todayBtn = document.getElementById("today-btn");
  const weekBtn = document.getElementById("week-btn");
  const projectsBtn = document.getElementById("projects-btn");
  const submitBtn = document.getElementById("submit");

  const textInput = document.getElementById("text");
  const dateInput = document.getElementById("date");

  textInput.setAttribute("required", true);
  dateInput.setAttribute("required", true);

  addBtn.addEventListener("click", () => (modal.style.display = "flex"));
  submitBtn.addEventListener("click", () => {
    modal.style.display = "none";
    addTask(textInput, dateInput);
    showAllTodos(main);
  });

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      textInput.value = "";
      dateInput.value = "";
    }
  });

  inboxBtn.addEventListener("click", () => {
    showAllTodos(main);
  });

  todayBtn.addEventListener("click", () => {
    showTodayTodos(main);
  });

  weekBtn.addEventListener("click", () => {
    showWeekTodos(main);
  });

  projectsBtn.addEventListener("click", () => {
    return;
  });
}

function showAllTodos(main) {
  main.innerHTML = "";
  ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.projects.forEach((project) => {
    project.todos.forEach((todo) => {
      main.append(createTask(todo));
    });
  });
}

function showTodayTodos(main) {
  main.innerHTML = "";
  ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.todayProject.todos.forEach((todo) => {
    main.append(createTask(todo));
  });
}

function showWeekTodos(main) {
  main.innerHTML = "";
  ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.weekProject.todos.forEach((todo) => {
    main.append(createTask(todo));
  });
}

function createTask(todo) {
  const taskDiv = document.createElement("div");
  const taskLeft = document.createElement("div");
  const taskRight = document.createElement("div");
  const name = document.createElement("p");
  const date = document.createElement("p");

  taskDiv.classList = "task";
  taskLeft.classList = "left-side";
  taskRight.classList = "right-side";

  name.textContent = todo.name;
  date.textContent = todo.dueDate;

  taskDiv.append(taskLeft, taskRight);
  taskLeft.append(name);
  taskRight.append(date);

  return taskDiv;
}

function addTask(textInput, dateInput) {
  const today = new Date().toLocaleDateString("en-GB");

  const task = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](textInput.value, dateInput.value);

  if (task.dueDate === today) {
    ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.addTodoToProject(task, "Today");
  } else {
    ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.addTodoToProject(task, "Week");
  }

  textInput.value = "";
  dateInput.value = "";

  console.log(___WEBPACK_IMPORTED_MODULE_0__.TodoApp.projects);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0Y7O0FBRXZCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGdEQUFPO0FBQ25DLDJCQUEyQixnREFBTztBQUNsQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHdCQUF3QixnREFBTztBQUMvQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLCtDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q0s7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjRCO0FBQ0Y7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQXdCO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGlFQUFrQztBQUNwQztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxnRUFBaUM7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJOztBQUV2QjtBQUNBLElBQUksdURBQXdCO0FBQzVCLElBQUk7QUFDSixJQUFJLHVEQUF3QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBLGNBQWMsK0NBQWdCO0FBQzlCOzs7Ozs7O1VDOUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCByZW5kZXJQYWdlIGZyb20gXCIuL3VpXCI7XG5cbmV4cG9ydCBjb25zdCBUb2RvQXBwID0ge1xuICBwcm9qZWN0czogW10sXG4gIHRvZGF5UHJvamVjdDogbnVsbCxcbiAgd2Vla1Byb2plY3Q6IG51bGwsXG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnRvZGF5UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiVG9kYXlcIik7XG4gICAgdGhpcy53ZWVrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV2Vla1wiKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2godGhpcy50b2RheVByb2plY3QpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaCh0aGlzLndlZWtQcm9qZWN0KTtcbiAgfSxcblxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9LFxuXG4gIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkVG9kb1RvUHJvamVjdCh0b2RvLCBwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHApID0+IHAubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVmYXVsdFByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICB9XG4gIH0sXG59O1xuXG5Ub2RvQXBwLmluaXQoKTtcblxucmVuZGVyUGFnZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHJlbW92ZVRvZG8odG9kbykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlID0gbnVsbCwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICBlZGl0KG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvZG9BcHAgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZpZWxkXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ0blwiKTtcbiAgY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94LWJ0blwiKTtcbiAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWJ0blwiKTtcbiAgY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vlay1idG5cIik7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1idG5cIik7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG4gIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuXG4gIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCB0cnVlKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIHRydWUpO1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gKG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIikpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYWRkVGFzayh0ZXh0SW5wdXQsIGRhdGVJbnB1dCk7XG4gICAgc2hvd0FsbFRvZG9zKG1haW4pO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93QWxsVG9kb3MobWFpbik7XG4gIH0pO1xuXG4gIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd1RvZGF5VG9kb3MobWFpbik7XG4gIH0pO1xuXG4gIHdlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93V2Vla1RvZG9zKG1haW4pO1xuICB9KTtcblxuICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJldHVybjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dBbGxUb2RvcyhtYWluKSB7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgVG9kb0FwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBtYWluLmFwcGVuZChjcmVhdGVUYXNrKHRvZG8pKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUb2RheVRvZG9zKG1haW4pIHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBUb2RvQXBwLnRvZGF5UHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlVGFzayh0b2RvKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93V2Vla1RvZG9zKG1haW4pIHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBUb2RvQXBwLndlZWtQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBtYWluLmFwcGVuZChjcmVhdGVUYXNrKHRvZG8pKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodG9kbykge1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICB0YXNrRGl2LmNsYXNzTGlzdCA9IFwidGFza1wiO1xuICB0YXNrTGVmdC5jbGFzc0xpc3QgPSBcImxlZnQtc2lkZVwiO1xuICB0YXNrUmlnaHQuY2xhc3NMaXN0ID0gXCJyaWdodC1zaWRlXCI7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICB0YXNrRGl2LmFwcGVuZCh0YXNrTGVmdCwgdGFza1JpZ2h0KTtcbiAgdGFza0xlZnQuYXBwZW5kKG5hbWUpO1xuICB0YXNrUmlnaHQuYXBwZW5kKGRhdGUpO1xuXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKHRleHRJbnB1dCwgZGF0ZUlucHV0KSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKTtcblxuICBjb25zdCB0YXNrID0gbmV3IFRvZG8odGV4dElucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuXG4gIGlmICh0YXNrLmR1ZURhdGUgPT09IHRvZGF5KSB7XG4gICAgVG9kb0FwcC5hZGRUb2RvVG9Qcm9qZWN0KHRhc2ssIFwiVG9kYXlcIik7XG4gIH0gZWxzZSB7XG4gICAgVG9kb0FwcC5hZGRUb2RvVG9Qcm9qZWN0KHRhc2ssIFwiV2Vla1wiKTtcbiAgfVxuXG4gIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgY29uc29sZS5sb2coVG9kb0FwcC5wcm9qZWN0cyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9