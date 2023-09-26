import { factoryBoard, factoryTask } from "./factory";
import { format, add, isToday, isThisWeek } from "date-fns";

let activeBoard = null;
let sidebar = true;

function initializeLocalStorage() {
  if (localStorage.getItem('boards')) {
    return;
  } else if (!localStorage.getItem('boards')) {
    localStorage.setItem('boards', JSON.stringify([ // Pre-made content for demonstration purposes
      {
        title: 'Kanban Project',
        tasks: [
          {
            title: 'Implement Client-side Form Validation',
            description: 'In this task, you will enhance the user experience by implementing form validation for various input fields. Form validation ensures that user-submitted data is accurate, complete, and meets specified criteria.',
            dueDate: format(add(new Date(), {days: 10}), 'yyyy-MM-dd'),
            priority: 'low',
            status: 'todo',
          },
          {
            title: 'Restructure Code into Modules',
            description: 'This task involves organizing and restructuring the project\'s codebase into modular components. Breaking down the code into manageable modules will improve code maintainability, readability, and scalability.',
            dueDate: format(add(new Date(), {days: 9}), 'yyyy-MM-dd'),
            priority: 'low',
            status: 'done',
          },
          {
            title: 'Make project responsive to all devices',
            description: 'Ensure that the Kanban project is accessible and responsive on various devices, including desktops, tablets, and smartphones. Implement responsive design practices to provide an optimal user experience across different screen sizes.',
            dueDate: format(add(new Date(), {days: 4}), 'yyyy-MM-dd'),
            priority: 'medium',
            status: 'doing',
          },
          {
            title: 'Local Storage Implementation',
            description: 'Implement local storage functionality to allow users to save their boards and tasks locally on their devices. This feature ensures that users can pick up where they left off even after closing and reopening the application.',
            dueDate: format(add(new Date(), {days: 8}), 'yyyy-MM-dd'),
            priority: 'high',
            status: 'done',
          },
          {
            title: 'Create CRUD Functions for Boards and Tasks',
            description: 'Develop Create, Read, Update, Delete functions for tasks and boards. This task is fundamental for enabling users to manage and organize their tasks and boards efficiently, enhancing the project\'s usability and functionality.',
            dueDate: format(add(new Date(), {days: 11}), 'yyyy-MM-dd'),
            priority: 'high',
            status: 'done',
          },
          {
            title: 'Implement Dynamic Content Rendering',
            description: 'Create a user interface that dynamically updates and displays tasks, boards, and details as users interact with the system. Ensure a seamless and responsive user experience that reflects real-time changes',
            dueDate: format(add(new Date(), {days: 11}), 'yyyy-MM-dd'),
            priority: 'high',
            status: 'done',
          },
          {
            title: 'Implement Light and Dark Mode',
            description: 'Add a light and dark mode toggle feature to enhance the user experience. Users can switch between different visual modes based on their preferences and reduce eye strain during extended usage.',
            dueDate: format(add(new Date(), {days: 3}), 'yyyy-MM-dd'),
            priority: 'medium',
            status: 'doing',
          },
        ]
      },
      {
        title: 'Restaurant Project',
        tasks: [
          {
            title: 'Create Figma prototype',
            description: 'Create a visual prototype of the restaurant project using Figma. This prototype will serve as a design reference and help in visualizing the project\'s user interface and user experience.',
            dueDate: format(add(new Date(), {days: 3}), 'yyyy-MM-dd'),
            priority: 'low',
            status: 'todo',
          },
          {
            title: 'Make environments for development and production',
            description: 'Set up distinct environments for development and production. This includes configuring npm packages and webpack loaders to ensure a smooth transition from development to production for the restaurant project.',
            dueDate: format(add(new Date(), {days: 15}), 'yyyy-MM-dd'),
            priority: 'medium',
            status: 'done',
          },
          {
            title: 'Gather Assets for the Project',
            description: 'In this task, you will gather all the necessary assets required for the Project. Assets are essential components that contribute to the project\'s visual and functional elements.',
            dueDate: format(add(new Date(), {days: 16}), 'yyyy-MM-dd'),
            priority: 'low',
            status: 'todo',
          },
        ]
      },
      {
        title: 'Mamay\'s 86th Birthday',
        tasks: [
          {
            title: 'Buy a Ce\'s Vous Le Chant for the Party',
            description: 'Check out which are the best lechons in Manila and order one for the party. Ensure that this porcine masterpiece is seasoned to hog-heaven perfection.',
            dueDate: format(add(new Date(), {days: 1}), 'yyyy-MM-dd'),
            priority: 'medium',
            status: 'todo',
          },
          {
            title: 'Send Invitations',
            description: 'Design and send out invitations well in advance. Inform the guests of the venue, date, and time. Ensure that all invited guests receive their invitations in a timely and organized manner.',
            dueDate: '2023-09-24',
            priority: 'medium',
            status: 'done',
          },
          {
            title: 'Plan the Menu',
            description: 'Decide what\'s on the menu. Consider your grandmother\'s favorite dishes and any dietary restrictions she might have. Keep it simple and delicious.',
            dueDate: '2023-09-25',
            priority: 'low',
            status: 'done',
          },
          {
            title: 'Make Grandchildren Dance Unwillingly',
            description: 'Use my persuasion skills, and maybe a tickle or two to coax the grandchildren onto the dance floor, even if they initially resist. The goal is to turn reluctant shufflers into spontaneous dancers.',
            dueDate: format(add(new Date(), {days: 1}), 'yyyy-MM-dd'),
            priority: 'low',
            status: 'todo',
          },
          {
            title: 'Make Mamay Happy',
            description: 'The ultimate task at hand is to fill Mamay\'s heart with happiness on her 86th birthday. It\'s about creating an atmosphere of love and joy, where she feels cherished and surrounded by the warmth of family and friends.',
            dueDate: format(add(new Date(), {days: 1}), 'yyyy-MM-dd'),
            priority: 'high',
            status: 'doing',
          },
        ]
      },
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
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));
  const input = document.querySelector('#input-edit-board-title');
  const newBoard = getActiveBoard();

  newBoard.title = input.value;

  activeBoard = newBoard;

  boards.splice(indexOfActiveBoard, 1, newBoard);

  localStorage.setItem('boards', JSON.stringify(boards));
}

function deleteBoard() {
  const boards = JSON.parse(localStorage.getItem('boards'));
  const indexOfActiveBoard = boards.findIndex((board) => JSON.stringify(board.title) === JSON.stringify(getActiveBoard().title));
  
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