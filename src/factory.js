function factoryBoard(title) { 
  return {
    title,
    tasks: []
  }
}

function factoryTask(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    status: 'todo'
  }
}

export { factoryBoard, factoryTask };