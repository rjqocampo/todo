import { factoryBoard } from "./board-handler";

let activeBoard = null;

const boards = [
  {
    title: 'Kanban Project',
    tasks: [
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'This Week',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'Today',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: 'Today',
        priority: 'high',
        status: 'doing',
      },
    ]
  },
  {
    title: 'Restaurant Project',
    tasks: [
      {
        title: 'Create Figma prototype',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'This Week',
        priority: 'high',
        status: 'todo',
      },
      {
        title: 'Make environments for development and production',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'Today',
        priority: 'low',
        status: 'done',
      },
    ]
  },
]

function getBoards() {
  return boards.map((board) => {
    return board.title;
  })
}

function getBoardsTotal() {
  return boards.length;
}

function getActiveBoard() {
  return activeBoard;
}

function addNewBoard() {
  const input = document.querySelector('#input-board-title');  
  const newBoard = factoryBoard(input.value);

  boards.unshift(newBoard);
  console.log(boards);
}

function setActiveBoard(e) {
  // console.log(e.target.closest('li').getAttribute('data-index'));
  const index = e.target.closest('li').getAttribute('data-index');

  activeBoard = boards[index];
  // console.log(activeBoard);
}

export { getBoards, getBoardsTotal, addNewBoard, setActiveBoard, getActiveBoard };