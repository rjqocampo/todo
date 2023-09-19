import { getActiveBoard } from "./data-handler";

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

function toggleHeaderButtons() {
  const buttons = document.querySelectorAll('.header-buttons');

  buttons.forEach((button) => {
    if (getActiveBoard() === null) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  })
}

function spanDatePicker() {
  const inputFieldsDate = document.querySelectorAll('input[type="date"]');

  inputFieldsDate.forEach((input) => {
    input.addEventListener('click', () => {
      input.showPicker();
    })
  })
}

spanDatePicker();

export { showDialog, closeDialog, exitDialog, toggleHeaderButtons };
