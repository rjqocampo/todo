import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { displayBoards, displayBoardsTotal, removeBoards, clearInputFields } from './display-module';
import { closeCreateBoardDialog, displayCreateBoardDialog } from './ui-module';
import { addNewBoard } from './data-handler';

const buttonOpenCreateBoardDialog = document.querySelector('.button-open-create-board');
const buttonCloseCreateBoardDialog = document.querySelector('.button-close-board-modal');
const buttonCreateBoard = document.querySelector('#button-create-board');

buttonOpenCreateBoardDialog.addEventListener('click', () => {
  displayCreateBoardDialog();
})

buttonCloseCreateBoardDialog.addEventListener('click', () => {
  closeCreateBoardDialog();
})

buttonCreateBoard.addEventListener('click', () => {
  removeBoards();
  addNewBoard();
  displayBoards();
  displayBoardsTotal();
  clearInputFields();
  closeCreateBoardDialog();
})

displayBoards();
displayBoardsTotal();

console.log('Hello world')