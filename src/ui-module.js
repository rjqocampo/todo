const inputDate = document.querySelector('input[type="date"]');

inputDate.addEventListener('click', () => {
  inputDate.showPicker();
})

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



export { showDialog, closeDialog, exitDialog };
