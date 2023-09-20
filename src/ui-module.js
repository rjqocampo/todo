import { getActiveBoard, getDueToday } from "./data-handler";
import { displayReadTaskValues } from "./display-module";

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

    li.setAttribute('data-index', index);
    h4.textContent = item.title;
    divFooter.classList.add('task-footer');
    divFooterContainer.classList.add('task-footer__container');
    h5.textContent = item.dueDate;

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
      displayReadTaskValues(e, 'li');
    })
  })
}

function createBoardColumn(columnName) {
  const main = document.querySelector('main');
  const divColumn =  document.createElement('div');
  const divHeader = document.createElement('div');
  const divColor = document.createElement('div');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  
  divColumn.classList.add('column');
  divHeader.setAttribute('class', `column__header column__header-${columnName}`);
  h3.textContent = columnName;
  ul.classList.add(`list-${columnName}`);

  main.appendChild(divColumn);
  divColumn.appendChild(divHeader);
  divHeader.appendChild(divColor);
  divHeader.appendChild(h3);
  divColumn.appendChild(ul);
}

function showDueMain() {
  const boards = getDueToday();

  const main = document.querySelector('main');
  const divDue = document.createElement('div');
  const divHeader = document.createElement('div');
  const divContainer = document.createElement('div');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const divHr = document.createElement('div');
  const button = document.createElement('button');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const ul = document.createElement('ul');

  divDue.classList.add('due-page');
  divHeader.classList.add('due-page__header');
}

function showBoardMain() {
  createBoardColumn('todo');
  createBoardColumn('doing');
  createBoardColumn('done');
}

function closeMain() {
  const main = document.querySelector('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function showDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.showModal();
}

function closeDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.close();
}

function exitDialog(e) {
  const dialog = e.target.closest('dialog');

  dialog.close();
}

function toggleHeaderButtons() {
  const buttons = document.querySelectorAll('.header-buttons');

  buttons.forEach((button) => {
    if (getActiveBoard() === null) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  })
}

function spanDatePicker() {
  const inputFieldsDate = document.querySelectorAll('input[type="date"]');

  inputFieldsDate.forEach((input) => {
    input.addEventListener('click', () => {
      input.showPicker();
    })
  })
}

spanDatePicker();

export { 
  showDialog, 
  closeDialog, 
  exitDialog, 
  toggleHeaderButtons, 
  createCards,
  showBoardMain,
  closeMain,
  showDueMain
};
