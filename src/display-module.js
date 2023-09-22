import { format } from "date-fns";
import { getBoards, getBoardsTotal, setActiveBoard, getActiveBoard, getTasks, getTasksTotal } from "./data-handler";
import { toggleHeaderButtons, createCards, showBoardMain, toggleFocus } from "./ui-module";

function displayBoards() {
  const ul = document.querySelector('.boards-list > ul');

  getBoards().forEach((board, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');

    li.setAttribute('data-board', `${index}`);
    button.classList.add('button-render');
    img.setAttribute('src', 'assets/images/feather.svg');
    img.setAttribute('alt', 'Feather Icon');
    p.textContent = board;

    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(img)
    button.appendChild(p)

    li.addEventListener('click', (e) => {
      setActiveBoard(e, 'li');
      displayActiveBoard();
      removeColumn();
      showBoardMain();
      displayTasksTotal();
      removeTasks();
      displayTasks();
      toggleFocus(e);
    })
  })
}

function displayActiveBoard() {
  const boardHeader = document.querySelector('header > h2');
  const board = getActiveBoard();

  if (board === null) {
    boardHeader.textContent = '';
  } else {
    boardHeader.textContent = board.title;
  }

  toggleHeaderButtons();
}

function displayDueHeader(dueWhen) {
  const dueHeader = document.querySelector('header > h2');
 
  if (dueWhen === 'today') {
    dueHeader.textContent = 'Today';
  } else if (dueWhen === 'this week') {
    dueHeader.textContent = 'This Week';
  }

  console.log('click');
}

function displayTasks() {
  const tasks = getTasks();

  createCards(tasks);
}

function displayBoardsTotal() {
  const span = document.querySelector('.board-total');

  span.textContent = getBoardsTotal();
}

function displayTasksTotal() {
  const { todo, doing, done } = getTasksTotal();
  
  const columnTodo = document.querySelector('.column__header-todo h3');
  const columnDoing = document.querySelector('.column__header-doing h3');
  const columnDone = document.querySelector('.column__header-done h3');

  columnTodo.textContent = `TODO (${todo})`;
  columnDoing.textContent = `DOING (${doing})`;
  columnDone.textContent=  `DONE (${done})`;
}

function removeBoards() {
  const ul = document.querySelector('.boards-list > ul');
  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function removeColumn() {
  const main = document.querySelector('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

function removeTasks() {
  const ulTodo = document.querySelector('.list-todo');
  const ulDoing = document.querySelector('.list-doing');
  const ulDone = document.querySelector('.list-done');

  while (ulTodo.firstChild) {
    ulTodo.removeChild(ulTodo.firstChild);
  }

  while (ulDoing.firstChild) {
    ulDoing.removeChild(ulDoing.firstChild);
  }

  while (ulDone.firstChild) {
    ulDone.removeChild(ulDone.firstChild);
  }
}

function displayEditBoardValues() {
  const input = document.querySelector('.dialog-edit-board input')

  input.value = getActiveBoard().title;
}

function displayReadTaskValues(e, str, indexHolder) {
  const tasks = getTasks();
  const index = e.target.closest(indexHolder).getAttribute('data-index');

  const dialog = document.querySelector(`.dialog-${str}`);
  const h4 = document.querySelector(`.dialog-${str} h4`);
  const h5 = document.querySelector(`.dialog-${str} h5`);
  const p = document.querySelector(`.dialog-${str} p`);
  const h6 = document.querySelector(`.dialog-${str} h6`);
  const img = document.querySelector(`.dialog-${str}__info img`);
  const span = document.querySelector(`.dialog-${str} span`);
  const button = document.querySelector(`.dialog-${str}__buttons > button`);
  
  dialog.setAttribute('data-index', index);
  h4.textContent = tasks[index].status.toUpperCase();
  h5.textContent = tasks[index].title;
  p.textContent = tasks[index].description;

  const date = format(new Date(tasks[index].dueDate), 'PPP');
  h6.textContent = `Due on ${date}`;

  if (tasks[index].status === 'todo') {
    button.textContent = 'Start Task';
    button.classList.remove('button-proceed-task--delete');
  } else if (tasks[index].status === 'doing') {
    button.textContent = 'Complete Task';
    button.classList.remove('button-proceed-task--delete');
  } else if (tasks[index].status === 'done') {
    button.textContent = 'Delete Task';
    button.classList.add('button-proceed-task--delete');
  }
  
  if (str === 'read-due-task') {
    button.textContent = 'Open Board';
    button.classList.remove('button-proceed-task--delete');
  }

  if (tasks[index].priority === 'low') {
    img.setAttribute('src', 'assets/images/fill-1.svg')
    span.textContent = 'Low Priority';
  } else if (tasks[index].priority === 'medium') {
    img.setAttribute('src', 'assets/images/fill-2.svg')
    span.textContent = 'Medium Priority';
  } else if (tasks[index].priority === 'high') {
    img.setAttribute('src', 'assets/images/fill-3.svg')
    span.textContent = 'High Priority';
  }
}

function displayEditTaskValues(e) {
  const index = e.target.closest('dialog').getAttribute('data-index');
  const tasks = getTasks();

  const inputTitle = document.querySelector('#input-edit-task-title');
  const inputDescription = document.querySelector('#input-edit-task-description');
  const inputDate = document.querySelector('#input-edit-task-due-date');
  const inputPriority = document.querySelector('#input-edit-task-priority');
  const inputStatus = document.querySelector('#input-edit-task-status');

  inputTitle.value = tasks[index].title;
  inputDescription.value = tasks[index].description;
  inputDate.value = tasks[index].dueDate;
  inputPriority.value = tasks[index].priority;
  inputStatus.value = tasks[index].status;
}

displayBoards();
displayBoardsTotal();

export { 
  displayBoards,
  displayTasks,
  removeTasks,
  displayBoardsTotal,
  removeBoards,
  displayEditBoardValues,
  displayActiveBoard,
  displayEditTaskValues,
  displayReadTaskValues,
  displayTasksTotal,
  displayDueHeader,
  removeColumn
 };