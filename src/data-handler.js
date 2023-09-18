import { factoryBoard, factoryTask } from "./factory";

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

function getTasks() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());

  // const todo = boards[indexOfActiveBoard].tasks.filter(task => task.status === 'todo');
  // const doing = boards[indexOfActiveBoard].tasks.filter(task => task.status === 'doing');
  // const done = boards[indexOfActiveBoard].tasks.filter(task => task.status === 'done');

  return boards[indexOfActiveBoard].tasks;
}

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

function addNewTask() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());

  const inputTitle = document.querySelector('#input-add-task-title');
  const inputDescription = document.querySelector('#input-add-task-description');
  const inputDate = document.querySelector('#input-add-task-due-date');
  const inputPriority = document.querySelector('#input-add-task-priority');

  const newTask = factoryTask(
    inputTitle.value,
    inputDescription.value,
    inputDate.value,
    inputPriority.value
  );
  
  boards[indexOfActiveBoard].tasks.unshift(newTask);
}

function addNewBoard() {
  const input = document.querySelector('#input-create-board-title');  
  const newBoard = factoryBoard(input.value);

  boards.unshift(newBoard);
  console.log(boards);
}

function editBoard() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const input = document.querySelector('#input-edit-board-title');
  const newBoard = getActiveBoard();

  newBoard.title = input.value;

  activeBoard = newBoard; // to display updated board after editing

  boards.splice(indexOfActiveBoard, 1, newBoard);
  console.log(boards[indexOfActiveBoard]);
  console.log(boards);
}

function deleteBoard() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  
  activeBoard = null; // to display no board after deleting

  boards.splice(indexOfActiveBoard, 1);
  console.log(boards);
}

function setActiveBoard(e) {
  const index = e.target.closest('li').getAttribute('data-index');

  activeBoard = boards[index];
}

export { 
  getBoards, 
  getBoardsTotal, 
  addNewBoard, 
  setActiveBoard, 
  getActiveBoard, 
  editBoard, 
  deleteBoard,
  addNewTask,
  getTasks
};