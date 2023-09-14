import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { 
  displayBoards, 
  displayBoardsTotal, 
  removeBoards, 
  clearInputFields, 
  displayBoardEditValues, 
  displayActiveBoard 
} from './display-module';
import { showDialog, closeDialog, exitDialog } from './ui-module';
import { addNewBoard, editBoard, deleteBoard } from './data-handler';
import { formCheck, formCheckTasks } from './form-handler';

const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');
const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');
const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonEditBoard = document.querySelector('#button-edit-board');
const buttonDeleteBoard = document.querySelector('.button-delete-board');
const buttonOpenDialogAddTask = document.querySelector('.button-open-add-task');
const buttonAddTask = document.querySelector('#button-add-task');

buttonAddTask.addEventListener('click', () => {
  formCheckTasks('add-task');
})

buttonDeleteBoard.addEventListener('click', () => {
  deleteBoard();
  removeBoards();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('edit-board');
  displayActiveBoard();
})

buttonEditBoard.addEventListener('click', () => {
  if (!formCheck('edit-board')) {
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

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  showDialog('create-board');
})

buttonOpenDialogEditBoard.addEventListener('click', () => {
  showDialog('edit-board');
  displayBoardEditValues();
})

buttonOpenDialogAddTask.addEventListener('click', () => {
  showDialog('add-task');
})

buttonsDialogClose.forEach((button) => {
  button.addEventListener('click', (e) => { exitDialog(e) })
})

buttonCreateBoard.addEventListener('click', (e) => {
  if (!formCheck('create-board')) {
    return;
  }
  removeBoards();
  addNewBoard();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('create-board');
})

displayBoards();
displayBoardsTotal();

console.log('Hello world')