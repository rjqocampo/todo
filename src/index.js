import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints-main.scss';
import './styles/breakpoints-header.scss';
import './styles/breakpoints-aside.scss';
import './styles/breakpoints-index.scss';

import { 
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
} from './display-module';
import { 
  addNewBoard, 
  editBoard, 
  deleteBoard, 
  addNewTask, 
  proceedTask, 
  storeIndex,
  editTask,
  deleteTask,
  setActiveBoardToNull,
  toggleSidebar,
  setActiveBoard
} from './data-handler';
import { 
  showDialog, 
  closeDialog, 
  exitDialog, 
  toggleHeaderButtons, 
  closeMain,
  showDueMain,
  showSidebar,
  toggleFocus,
  toggleDarkMode,
  showBoardMain
} from './ui-module';
import { 
  formCheckBoards, 
  formCheckTasks, 
  clearInputFields 
} from './form-handler';

const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');
const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');
const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonEditBoard = document.querySelector('#button-edit-board');
const buttonDeleteBoard = document.querySelector('.button-delete-board');
const buttonOpenDialogAddTask = document.querySelector('.button-open-add-task');
const buttonAddTask = document.querySelector('#button-add-task');
const buttonProceedTask = document.querySelector('#button-proceed-task');
const buttonOpenDialogEditTask = document.querySelector('#button-open-edit-task');
const buttonEditTask = document.querySelector('#button-edit-task');
const buttonDeleteTask = document.querySelector('.button-delete-task');
const buttonDueToday = document.querySelector('.due-buttons__today');
const buttonDueThisWeek = document.querySelector('.due-buttons__this-week');
const buttonsSidebar = document.querySelectorAll('.button-sidebar');
const buttonDarkMode = document.querySelector('.night-mode input');
const buttonOpenBoard = document.querySelector('#button-open-board');

buttonOpenBoard.addEventListener('click', (e) => {
  setActiveBoard(e, 'dialog');
  displayActiveBoard();
  removeColumn();
  showBoardMain();
  displayTasksTotal();
  displayTasks();
  closeDialog('read-due-task');
  toggleFocus();
})

buttonDarkMode.addEventListener('click', () => {
  toggleDarkMode();
})

buttonsSidebar.forEach((button) => {
  button.addEventListener('click', () => {
    toggleSidebar();
    showSidebar();
  })
})

buttonDueToday.addEventListener('click', (e) => {
  setActiveBoardToNull();
  toggleHeaderButtons();
  displayDueHeader('today');
  closeMain();
  showDueMain('today');
  toggleFocus(e);
})

buttonDueThisWeek.addEventListener('click', (e) => {
  setActiveBoardToNull();
  toggleHeaderButtons();
  displayDueHeader('this week');
  closeMain();
  showDueMain('this week');
  toggleFocus(e);
})

buttonDeleteTask.addEventListener('click', (e) => {
  deleteTask(e);
  closeDialog('edit-task');
  removeTasks();
  displayTasksTotal();
  displayTasks();
})

buttonEditTask.addEventListener('click', (e) => {
  if (!formCheckTasks('edit-task')) {
    console.log('Invalid form');
    return;
  }
  editTask(e);
  closeDialog('edit-task');
  removeTasks();
  displayTasksTotal();
  displayTasks();
  showDialog('read-task');
  displayReadTaskValues(e, 'read-task', 'dialog');
})

buttonOpenDialogEditTask.addEventListener('click', (e) => {
  closeDialog('read-task');
  showDialog('edit-task');
  storeIndex(e);
  displayEditTaskValues(e);
})

buttonProceedTask.addEventListener('click', (e) => {
  proceedTask(e);
  closeDialog('read-task');
  removeTasks();
  displayTasksTotal();
  displayTasks();
})

buttonAddTask.addEventListener('click', () => {
  if (!formCheckTasks('add-task')) {
    console.log('Invalid form');
    return;
  }
  addNewTask();
  clearInputFields();
  closeDialog('add-task');
  removeTasks();
  displayTasksTotal();
  displayTasks();
})

buttonDeleteBoard.addEventListener('click', () => {
  deleteBoard();
  removeBoards();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('edit-board');
  displayActiveBoard();
  closeMain();
})

buttonEditBoard.addEventListener('click', () => {
  if (!formCheckBoards('edit-board')) {
    return;
  }
  editBoard();
  removeBoards();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('edit-board');
  displayActiveBoard();
})

buttonCreateBoard.addEventListener('click', (e) => {
  if (!formCheckBoards('create-board')) {
    return;
  }
  removeBoards();
  addNewBoard();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('create-board');
})

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  showDialog('create-board');
})

buttonOpenDialogEditBoard.addEventListener('click', () => {
  showDialog('edit-board');
  displayEditBoardValues();
})

buttonOpenDialogAddTask.addEventListener('click', () => {
  showDialog('add-task');
})

buttonsDialogClose.forEach((button) => {
  button.addEventListener('click', (e) => { exitDialog(e) })
})
