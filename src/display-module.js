import { getBoards, getBoardsTotal, setActiveBoard, getActiveBoard, getTasks } from "./data-handler";
import { toggleHeaderButtons, showDialog } from "./ui-module";

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

function createCards(arrList) {
  const ulTodo = document.querySelector('.list-todo');
  const ulDoing = document.querySelector('.list-doing');
  const ulDone = document.querySelector('.list-done');

  arrList.forEach((item, index) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const divFooter = document.createElement('div');
    const divFooterContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h5 = document.createElement('h5');

    h4.textContent = item.title;
    divFooter.classList.add('task-footer');
    divFooterContainer.classList.add('task-footer__container');
    h5.textContent = item.dueDate;
    li.setAttribute('data-index', index);

    if (item.priority === 'low') {
      img.setAttribute('src', 'assets/images/flag.svg');
      span.classList.add('task-footer__prio--low');
      span.textContent = 'low';
    } else if (item.priority === 'medium') {
      img.setAttribute('src', 'assets/images/flag-purple.svg');
      span.classList.add('task-footer__prio--medium');
      span.textContent = 'medium';
    } else if (item.priority === 'high') {
      img.setAttribute('src', 'assets/images/flag-orange.svg');
      span.classList.add('task-footer__prio--high');
      span.textContent = 'high';
    }

    li.appendChild(h4);
    li.appendChild(divFooter);
    divFooter.appendChild(divFooterContainer);
    divFooterContainer.appendChild(img);
    divFooterContainer.appendChild(span);
    divFooter.appendChild(h5);

    if (item.status === 'todo') {
      li.classList.add('todo');
      ulTodo.appendChild(li);
    } else if (item.status === 'doing') {
      li.classList.add('doing');
      ulDoing.appendChild(li);
    } else if (item.status === 'done') {
      li.classList.add('done');
      ulDone.appendChild(li);
    }

    li.addEventListener('click', (e) => {
      showDialog('read-task');
      displayReadTaskValues(e);
    })
  })
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

function displayBoardEditValues() {
  const input = document.querySelector('.dialog-edit-board input')

  input.value = getActiveBoard().title;
}

function displayReadTaskValues(e) {
  console.log(getTasks());
  console.log(e.target.closest('li').getAttribute('data-index'));

  const tasks = getTasks();
  const index = e.target.closest('li').getAttribute('data-index');

  const h5 = document.querySelector('.dialog-read-task h5');
  const p = document.querySelector('.dialog-read-task p');
  const h6 = document.querySelector('.dialog-read-task h6');
  const img = document.querySelector('.dialog-read-task__info img');
  const span = document.querySelector('.dialog-read-task span');
  
  h5.textContent = tasks[index].title;
  p.textContent = tasks[index].description;
  h6.textContent = tasks[index].dueDate;
  span.textContent = tasks[index].priority;

  if (tasks[index].priority === 'low') {
    img.setAttribute('src', 'assets/images/flag.svg')
  } else if (tasks[index].priority === 'medium') {
    img.setAttribute('src', 'assets/images/flag-purple.svg')
  } else if (tasks[index].priority === 'high') {
    img.setAttribute('src', 'assets/images/flag-orange.svg')
  }
}

displayBoards();
displayBoardsTotal();

export { 
  displayBoards,
  displayTasks,
  removeTasks,
  displayBoardsTotal,
  removeBoards,
  displayBoardEditValues,
  displayActiveBoard
 };