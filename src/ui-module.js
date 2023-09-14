function showDialogCreateBoard() {
  const dialog = document.querySelector('.dialog-create-board');

  dialog.showModal();
}

function closeDialogCreateBoard() {
  const dialog = document.querySelector('.dialog-create-board');

  dialog.close();
}

function openDialogEditBoard() {
  const dialog = document.querySelector('.dialog-edit-board');

  dialog.showModal();
}

function closeDialog(e) {
  const dialog = e.target.closest('dialog');

  dialog.close();
}

export { showDialogCreateBoard, closeDialogCreateBoard, openDialogEditBoard, closeDialog };