import { factoryBoard, factoryTask } from "./factory";
import { isToday, isThisWeek } from "date-fns";

let activeBoard = null;
let sidebar = true;

function initializeLocalStorage() {
  if (localStorage.getItem('boards')) {
    return;
  } else if (!localStorage.getItem('boards')) {
    localStorage.setItem('boards', JSON.stringify([
      {
        title: 'Kanban Project',
        tasks: [
          {
            title: 'Build UI for Project',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
            dueDate: '2023-09-25',
            priority: 'low',
            status: 'todo',
          },
          {
            title: 'Restructure Code into Modules',
            description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
            dueDate: '2023-09-26',
            priority: 'medium',
            status: 'todo',
          },
          {
            title: 'Make project responsive to all devices',
            description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
            dueDate: '2023-09-27',
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
            dueDate: '2023-09-25',
            priority: 'high',
            status: 'todo',
          },
          {
            title: 'Make environments for development and production',
            description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
            dueDate: '2023-09-27',
            priority: 'low',
            status: 'done',
          },
        ]
      },
      // {
      //   title: 'Battleship Project',
      //   tasks: []
      // },
    ]));
  }
}

function addNewBoard() {
  const input = document.querySelector('#input-create-board-title');  
  const newBoard = factoryBoard(input.value);
  let currentData = null;
  let newData = null;

  if (localStorage.getItem('boards')) { // checks if boards is empty. if empty, initialize an array
    currentData = JSON.parse(localStorage.getItem('boards'));
  } else if (!localStorage.getItem('boards')) {
    localStorage.setItem('boards', []);
  }

  if (currentData) {
    newData = [newBoard].concat(currentData);
  } else if (!currentData) {
    newData = [newBoard];
  }
  localStorage.setItem('boards', JSON.stringify(newData));
}

function editBoard() {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board) === JSON.stringify(getActiveBoard()));
  const input = document.querySelector('#input-edit-board-title');
  const newBoard = getActiveBoard();

  newBoard.title = input.value;

  activeBoard = newBoard;

  boards.splice(indexOfActiveBoard, 1, newBoard);

  localStorage.setItem('boards', JSON.stringify(boards));
}

function deleteBoard() {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board) === JSON.stringify(getActiveBoard()));
  
  activeBoard = null;

  boards.splice(indexOfActiveBoard, 1);

  localStorage.setItem('boards', JSON.stringify(boards));
}

function getBoards() {
  if (localStorage.getItem('boards')) {
    const boards = JSON.parse(localStorage.getItem('boards'));
    return boards.map((board) => board.title); 
  } else if (!localStorage.getItem('boards')) {
    return [];
  }
}

function getBoardsTotal() {
  if (localStorage.getItem('boards')) {
    return JSON.parse(localStorage.getItem('boards')).length;
  } else if (!localStorage.getItem('boards')) {
    return 0;
  }
}

function getActiveBoard() {
  return activeBoard;
}

function addNewTask() {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));

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

  localStorage.setItem('boards', JSON.stringify(boards));
}

function editTask(e) {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');
  const newTask = boards[indexOfActiveBoard].tasks[indexOfTask];

  const inputTitle = document.querySelector('#input-edit-task-title');
  const inputDescription = document.querySelector('#input-edit-task-description');
  const inputDate = document.querySelector('#input-edit-task-due-date');
  const inputPriority = document.querySelector('#input-edit-task-priority');
  const inputStatus = document.querySelector('#input-edit-task-status');

  newTask.title = inputTitle.value;
  newTask.description = inputDescription.value;
  newTask.dueDate = inputDate.value;
  newTask.priority = inputPriority.value;
  newTask.status = inputStatus.value;

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1, newTask);

  localStorage.setItem('boards', JSON.stringify(boards));
}

function deleteTask(e) {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1);

  localStorage.setItem('boards', JSON.stringify(boards));
}

function getTasks() {
  const boards = JSON.parse(localStorage.getItem('boards'));

  const indexOfActiveBoard = boards.findIndex((board) => {
    return JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title);
  });

  return boards[indexOfActiveBoard].tasks;
}

function getDueTasks(dueWhen) {
  const boards = JSON.parse(localStorage.getItem('boards'));

  const arr = [];

  boards.forEach((board, index) => {
    const indexedTasks = board.tasks.map((task, index) => {
      return {...task, index};
    })

    const dueTasks = indexedTasks.filter((task) => {
      if (dueWhen === 'today') {
        return task.status !== 'done' && isToday(new Date(task.dueDate));
      } else if (dueWhen === 'this week') {
        return task.status !== 'done' && isThisWeek(new Date(task.dueDate));
      }
    })

    if (dueTasks.length !== 0) {
      arr.push({
        title: board.title,
        tasks: [...dueTasks],
        index: index
      });
    }
  })

  return arr;
} 

function getTasksTotal() {
  const tasks = getTasks();

  const todo = tasks.filter((task) => task.status === 'todo').length;
  const doing = tasks.filter((task) => task.status === 'doing').length;
  const done = tasks.filter((task) => task.status === 'done').length;

  return { todo, doing, done };
}

function proceedTask(e) {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));

  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');
  const task = boards[indexOfActiveBoard].tasks[indexOfTask];
  const statusOfTask = boards[indexOfActiveBoard].tasks[indexOfTask].status;

  if (statusOfTask === 'todo') {
    task.status = 'doing';
  } else if (statusOfTask === 'doing') {
    task.status = 'done';
  } else if (statusOfTask === 'done') {
    deleteTask(e);
    return;
  }

  localStorage.setItem('boards', JSON.stringify(boards));
}

function setActiveBoard(e, dataIndexHolder) {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const index = e.target.closest(dataIndexHolder).getAttribute('data-board');

  activeBoard = boards[index];
}

function setActiveBoardToNull() {
  activeBoard = null;
}

function toggleSidebar() {
  sidebar = sidebar ? false : true;
}

function getSidebar() {
  return sidebar;
}

function parseDate(date) {
  if (isToday(new Date(date))) {
    return 'today';
  } else {
    return date.split('-').slice(1).join('/');
  }
}

function storeIndex(e) {
  const dialog = document.querySelector('.dialog-edit-task');
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');

  dialog.setAttribute('data-index', indexOfTask);
}

function storeBoardIndex(e) {
  const dialog = document.querySelector('.dialog-read-due-task');
  const indexOfBoard = e.target.closest('li').getAttribute('data-board');

  dialog.setAttribute('data-board', indexOfBoard);
}

initializeLocalStorage();

export { 
  getBoards, 
  getBoardsTotal, 
  addNewBoard, 
  setActiveBoard, 
  getActiveBoard, 
  editBoard, 
  deleteBoard,
  addNewTask,
  getTasks,
  proceedTask,
  storeIndex,
  editTask,
  getTasksTotal,
  deleteTask,
  setActiveBoardToNull,
  getDueTasks,
  toggleSidebar,
  getSidebar,
  parseDate,
  storeBoardIndex
};