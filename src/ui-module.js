import { getActiveBoard, getDueTasks, setActiveBoard, getSidebar, parseDate } from "./data-handler";
import { 
  displayReadTaskValues, 
  displayActiveBoard, 
  removeColumn, 
  displayTasksTotal, 
  removeTasks, 
  displayTasks
} from "./display-module";

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
    
    h5.textContent = `due ${parseDate(item.dueDate)}`;

    if (item.priority === 'low') {
      img.setAttribute('src', 'assets/images/fill-1.svg');
      span.classList.add('task-footer__prio--low');
      span.textContent = 'low';
    } else if (item.priority === 'medium') {
      img.setAttribute('src', 'assets/images/fill-2.svg');
      span.classList.add('task-footer__prio--medium');
      span.textContent = 'med';
    } else if (item.priority === 'high') {
      img.setAttribute('src', 'assets/images/fill-3.svg');
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

function showDueMain(dueWhen) {
  let boards = null;

  if (dueWhen === 'today') {
    boards = getDueTasks('today');
  } else if (dueWhen === 'this week') {
    boards = getDueTasks('this week');
  }
  const main = document.querySelector('main');

  boards.forEach((board) => {
    const divPage = document.createElement('div');
    const divHeader = document.createElement('div');
    const divContainer = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const divHr = document.createElement('div');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const ul = document.createElement('ul');

    divHeader.setAttribute('data-index', board.index);
    divPage.classList.add('due-board');
    divHeader.classList.add('due-board__header');
    h2.textContent = 'BOARD';
    h3.textContent = board.title;
    divHr.classList.add('hr');
    p.textContent = 'SEE BOARD';
    img.setAttribute('src', 'assets/images/arrow-right.svg');
    img.setAttribute('alt', 'Right arrow icon');

    main.appendChild(divPage);
    divPage.appendChild(divHeader);
    divHeader.appendChild(divContainer);
    divContainer.appendChild(h2);
    divContainer.appendChild(h3);
    divHeader.appendChild(divHr);
    divHeader.appendChild(button);
    button.appendChild(p);
    button.appendChild(img);
    divPage.appendChild(ul);

    button.addEventListener('click', (e) => {
      console.log('click');

      setActiveBoard(e, 'div');
      displayActiveBoard();
      removeColumn();
      showBoardMain();
      displayTasksTotal();
      removeTasks();
      displayTasks();
    })

    createDueCards(board.tasks, ul);
  })
}

function createDueCards(tasks, ul) {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const divFooter = document.createElement('div');
    const divFooterContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h5 = document.createElement('h5');

    h4.textContent = task.title;
    divFooter.classList.add('task-footer');
    divFooterContainer.classList.add('task-footer__container');
    h5.textContent = task.dueDate;

    if (task.priority === 'low') {
      img.setAttribute('src', 'assets/images/fill-1.svg');
      span.classList.add('task-footer__prio--low');
      span.textContent = 'low';
    } else if (task.priority === 'medium') {
      img.setAttribute('src', 'assets/images/fill-2.svg');
      span.classList.add('task-footer__prio--medium');
      span.textContent = 'medium';
    } else if (task.priority === 'high') {
      img.setAttribute('src', 'assets/images/fill-3.svg');
      span.classList.add('task-footer__prio--high');
      span.textContent = 'high';
    }

    li.appendChild(h4);
    li.appendChild(divFooter);
    divFooter.appendChild(divFooterContainer);
    divFooterContainer.appendChild(img);
    divFooterContainer.appendChild(span);
    divFooter.appendChild(h5);

    if (task.status === 'todo') {
      li.classList.add('todo');
    } else if (task.status === 'doing') {
      li.classList.add('doing');
    } else if (task.status === 'done') {
      li.classList.add('done');
    }

    ul.appendChild(li);
  })
}

function showBoardMain() {
  createBoardColumn('todo');
  createBoardColumn('doing');
  createBoardColumn('done');
}

function showSidebar() {
  const aside = document.querySelector('aside');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const buttonSidebarHeader = document.querySelector('.button-sidebar-header');

  if (getSidebar()) {
    console.log('sidebar on');
    aside.removeAttribute('id', 'aside--sidebar-hide');
    header.removeAttribute('id', 'header--sidebar-hide');
    main.removeAttribute('id', 'main--sidebar-hide');
    buttonSidebarHeader.removeAttribute('id', 'button--sidebar-hide')
  } else {
    console.log('sidebar off');
    aside.setAttribute('id', 'aside--sidebar-hide')
    header.setAttribute('id', 'header--sidebar-hide')
    main.setAttribute('id', 'main--sidebar-hide')
    buttonSidebarHeader.setAttribute('id', 'button--sidebar-hide')
  }
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

function toggleFocus(e) {
  const buttons = document.querySelectorAll('.button-render');
  const button = e.target.closest('li').children[0];

  buttons.forEach((button) => {
    button.classList.remove('button-render--focus');
  })

  button.classList.add('button-render--focus');
}

function toggleDarkMode() {
  console.log('dark mode');

  const root = document.documentElement;

  root.className = root.className === 'dark' ? 'light' : 'dark';
  console.log(root);
}

function setDarkMode() {
  const root = document.documentElement;
  root.className = 'dark';
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
setDarkMode();

export { 
  showDialog, 
  closeDialog, 
  exitDialog, 
  toggleHeaderButtons, 
  createCards,
  showBoardMain,
  closeMain,
  showDueMain,
  showSidebar,
  toggleFocus,
  toggleDarkMode
};
