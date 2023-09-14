function showDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.showModal();
}

function closeDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.close();
}

function exitDialog(e) {
  const dialog = e.target.closest('dialog');

  dialog.close();
}

document.querySelector('input[type="date"').addEventListener('focus', (e) => {
  e.target.showPicker();
})

export { showDialog, closeDialog, exitDialog };