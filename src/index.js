import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { displayBoards, displayBoardsTotal, removeBoards, clearInputFields } from './display-module';
import { closeCreateBoardDialog, showCreateBoardDialog } from './ui-module';
import { addNewBoard } from './data-handler';

const buttonOpenCreateBoardDialog = document.querySelector('.button-open-create-board');
const buttonCloseCreateBoardDialog = document.querySelector('.button-close-board-modal');
const buttonCreateBoard = document.querySelector('#button-create-board');
const formCreateBoard = document.querySelector('.dialog-create-board > form');

buttonOpenCreateBoardDialog.addEventListener('click', () => {
  showCreateBoardDialog();
})

buttonCloseCreateBoardDialog.addEventListener('click', () => {
  closeCreateBoardDialog();
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
  closeCreateBoardDialog();
})

function formCheck() {
  const input = document.querySelector('.dialog-create-board input');
  const span = document.querySelector('.dialog-create-board span')

  if (input.validity.valueMissing) {
    span.textContent = 'This field is required';
    return false;
  } else if (input.validity.tooShort) {
    span.textContent = 'Input is too short';
    return false;
  } else {
    span.textContent = '';
    return true;
  }
}

displayBoards();
displayBoardsTotal();

console.log('Hello world')