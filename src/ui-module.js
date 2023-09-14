function showCreateBoardDialog() {
  const dialog = document.querySelector('.dialog-create-board');

  dialog.showModal();
}

function closeCreateBoardDialog() {
  const dialog = document.querySelector('.dialog-create-board');

  dialog.close();
}

export { showCreateBoardDialog, closeCreateBoardDialog };