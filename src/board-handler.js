function factoryBoard(title) { 
  return {
    title,
    tasks: []
  }
}

// function createBoard() {
//   const input = document.querySelector('#input-board-title');  
//   const newBoard = factoryBoard(input.value);

//   return newBoard;
// }

export { factoryBoard };