import { getBoards, getBoardsTotal, setActiveBoard, getActiveBoard, getTasks } from "./data-handler";
import { toggleHeaderButtons, createCards, showBoardPage } from "./ui-module";

function displayBoards() {
  const ul = document.querySelector('.boards-list > ul');

  getBoards().forEach((board, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');

    li.setAttribute('data-index', `${index}`);

    img.setAttribute('src', 'assets/images/feather.svg');
    img.setAttribute('alt', 'Feather Icon');
    p.textContent = board;

    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(img)
    button.appendChild(p)

    li.addEventListener('click', (e) => {
      setActiveBoard(e);
      displayActiveBoard();
      removeColumn();
      showBoardPage();
      removeTasks();
      displayTasks();
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

function displayTasks() {
  const tasks = getTasks();

  createCards(tasks);
}



function displayBoardsTotal() {
  const span = document.querySelector('.board-total');

  span.textContent = getBoardsTotal();
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

function displayReadTaskValues(e, indexHolder) {
  const tasks = getTasks();
  const index = e.target.closest(indexHolder).getAttribute('data-index');

  const dialog = document.querySelector('.dialog-read-task');
  const h5 = document.querySelector('.dialog-read-task h5');
  const p = document.querySelector('.dialog-read-task p');
  const h6 = document.querySelector('.dialog-read-task h6');
  const img = document.querySelector('.dialog-read-task__info img');
  const span = document.querySelector('.dialog-read-task span');
  const button = document.querySelector('.dialog-read-task__buttons > button');
  
  dialog.setAttribute('data-index', index);
  h5.textContent = tasks[index].title;
  p.textContent = tasks[index].description;
  h6.textContent = tasks[index].dueDate;
  span.textContent = tasks[index].priority;

  if (tasks[index].status === 'todo') {
    button.textContent = 'Start Task';
    button.classList.remove('button-proceed-task--delete');
  } else if (tasks[index].status === 'doing') {
    button.textContent = 'Complete Task';
    button.classList.remove('button-proceed-task--delete');
  } else {
    button.textContent = 'Delete Task';
    button.classList.add('button-proceed-task--delete');
  }

  if (tasks[index].priority === 'low') {
    img.setAttribute('src', 'assets/images/flag.svg')
  } else if (tasks[index].priority === 'medium') {
    img.setAttribute('src', 'assets/images/flag-purple.svg')
  } else if (tasks[index].priority === 'high') {
    img.setAttribute('src', 'assets/images/flag-orange.svg')
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
  displayReadTaskValues
 };