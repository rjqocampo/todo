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

export { getBoards };