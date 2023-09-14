import { getBoards, getBoardsTotal, setActiveBoard, getActiveBoard } from "./data-handler";

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
    })
  })
}

function displayActiveBoard() {
  const board = getActiveBoard();

  boardHeader.textContent = board.title;
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

function clearInputFields() {
  const inputFields = document.querySelectorAll('input');

  inputFields.forEach((input) => {
    input.value = '';
  })
}

export { displayBoards, displayBoardsTotal, removeBoards, clearInputFields };