import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { displayBoards, displayBoardsTotal, removeBoards, clearInputFields, displayBoardEditValues } from './display-module';
import { showDialog, closeDialog, exitDialog } from './ui-module';
import { addNewBoard, editBoard } from './data-handler';
import { formCheck } from './form-handler';

const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');
const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');
const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonEditBoard = document.querySelector('#button-edit-board');

buttonEditBoard.addEventListener('click', () => {
  if (!formCheck('edit-board')) {
    return;
  }
  removeBoards();
  editBoard();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialog('edit-board');
})

buttonOpenDialogEditBoard.addEventListener('click', () => {
  showDialog('edit-board');
  displayBoardEditValues();
})

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  showDialog('create-board');
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