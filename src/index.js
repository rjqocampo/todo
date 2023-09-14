import './styles/index.scss';
import './styles/aside.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/dialog.scss';
import './styles/breakpoints.scss';

import { displayBoards, displayBoardsTotal } from './display-module';
import { displayCreateBoard } from './ui-module';

const buttonCreateBoard = document.querySelector('.button-create-board');

buttonCreateBoard.addEventListener('click', () => {
  displayCreateBoard();
})

displayBoards();
displayBoardsTotal();

console.log('Hello world')