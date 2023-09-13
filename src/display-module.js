import { getBoards } from "./data-handler";

console.log(getBoards());

function displayBoards() {
  const ul = document.querySelector('.boards-list > ul');

  getBoards().forEach((board) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');

    img.setAttribute('src', 'assets/images/feather.svg');
    img.setAttribute('alt', 'Feather Icon');
    p.textContent = board;

    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(img)
    button.appendChild(p)
  })
}

export { displayBoards };