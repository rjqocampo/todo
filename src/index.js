import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { displayBoards, displayBoardsTotal, removeBoards, clearInputFields, displayBoardEditValues } from './display-module';
import { showDialogCreateBoard, openDialogEditBoard, closeDialogCreateBoard, closeDialog } from './ui-module';
import { addNewBoard } from './data-handler';
import { formCheck } from './form-handler';

const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');

const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');

buttonOpenDialogEditBoard.addEventListener('click', () => {
  openDialogEditBoard();
  displayBoardEditValues();
})

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  showDialogCreateBoard();
})

buttonsDialogClose.forEach((button) => {
  button.addEventListener('click', (e) => { closeDialog(e) })
})

buttonCreateBoard.addEventListener('click', (e) => {
  if (!formCheck()) {
    return;
  }
  removeBoards();
  addNewBoard();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeDialogCreateBoard();
})

displayBoards();
displayBoardsTotal();

console.log('Hello world')