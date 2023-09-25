import { factoryBoard, factoryTask } from "./factory";
import { isToday, isThisWeek } from "date-fns";

let activeBoard = null;
let sidebar = true;

// const boards = [
//   {
//     title: 'Kanban Project',
//     tasks: [
//       {
//         title: 'Build UI for Project',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
//         dueDate: '2023-09-25',
//         priority: 'low',
//         status: 'todo',
//       },
//       {
//         title: 'Restructure Code into Modules',
//         description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
//         dueDate: '2023-09-22',
//         priority: 'medium',
//         status: 'todo',
//       },
//       {
//         title: 'Make project responsive to all devices',
//         description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
//         dueDate: '2023-09-23',
//         priority: 'high',
//         status: 'doing',
//       },
//     ]
//   },
//   {
//     title: 'Restaurant Project',
//     tasks: [
//       {
//         title: 'Create Figma prototype',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
//         dueDate: '2023-09-23',
//         priority: 'high',
//         status: 'todo',
//       },
//       {
//         title: 'Make environments for development and production',
//         description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
//         dueDate: '2023-09-22',
//         priority: 'low',
//         status: 'done',
//       },
//     ]
//   },
// ]

function initializeLocalStorage() {
  if (localStorage.getItem('boards')) {
    return;
  } else if (!localStorage.getItem('boards')) {
    localStorage.setItem('boards', []);
    // localStorage.setItem('boards', JSON.stringify([
    //   {
    //     title: 'Kanban Project',
    //     tasks: [
    //       {
    //         title: 'Build UI for Project',
    //         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
    //         dueDate: '2023-09-25',
    //         priority: 'low',
    //         status: 'todo',
    //       },
    //       {
    //         title: 'Restructure Code into Modules',
    //         description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
    //         dueDate: '2023-09-22',
    //         priority: 'medium',
    //         status: 'todo',
    //       },
    //       {
    //         title: 'Make project responsive to all devices',
    //         description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
    //         dueDate: '2023-09-23',
    //         priority: 'high',
    //         status: 'doing',
    //       },
    //     ]
    //   },
    //   {
    //     title: 'Restaurant Project',
    //     tasks: [
    //       {
    //         title: 'Create Figma prototype',
    //         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
    //         dueDate: '2023-09-23',
    //         priority: 'high',
    //         status: 'todo',
    //       },
    //       {
    //         title: 'Make environments for development and production',
    //         description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
    //         dueDate: '2023-09-22',
    //         priority: 'low',
    //         status: 'done',
    //       },
    //     ]
    //   },
    // ]));
  }
  console.log(localStorage.getItem('boards'));
}

function checkExistingBoards() {

}

// function addNewBoard() {
//   const input = document.querySelector('#input-create-board-title');  
//   const newBoard = factoryBoard(input.value);

//   boards.unshift(newBoard);
//   console.log(boards);
// }

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

// function editBoard() {
//   const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
//   const input = document.querySelector('#input-edit-board-title');
//   const newBoard = getActiveBoard();

//   newBoard.title = input.value;

//   activeBoard = newBoard; // to display updated board after editing

//   boards.splice(indexOfActiveBoard, 1, newBoard);
//   console.log(boards[indexOfActiveBoard]);
//   console.log(boards);
// }

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

// function getBoards() {
//   return boards.map((board) => {
//     return board.title;
//   })
// }

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

  console.log(boards);
}

function editTask(e) {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
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

  console.log(indexOfActiveBoard);
  console.log(indexOfTask);
  console.log(newTask);

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1, newTask);
  console.log(boards[indexOfActiveBoard]);
}

function deleteTask(e) {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1);
}

function getTasks() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());

  return boards[indexOfActiveBoard].tasks;
}

function getDueTasks(dueWhen) {
  const copyOfBoards = boards.slice();

  const arr = [];

  copyOfBoards.forEach((board, index) => {
    const indexedTasks = board.tasks.map((task, index) => {
      return {...task, index};
    })
    const dueTasks = indexedTasks.filter((task, index) => {
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

  console.log(arr);
  console.log(boards);
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
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');
  const task = boards[indexOfActiveBoard].tasks[indexOfTask];
  const statusOfTask = boards[indexOfActiveBoard].tasks[indexOfTask].status;

  if (statusOfTask === 'todo') {
    task.status = 'doing';
  } else if (statusOfTask === 'doing') {
    task.status = 'done';
  } else if (statusOfTask === 'done') {
    deleteTask(e);
  }
}

function setActiveBoard(e, dataIndexHolder) {
  const index = e.target.closest(dataIndexHolder).getAttribute('data-board');
  console.log(index);
  activeBoard = boards[index];
}

function setActiveBoardToNull() {
  activeBoard = null;
}

function toggleSidebar() {
  sidebar = sidebar ? false : true;
  console.log(sidebar);
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