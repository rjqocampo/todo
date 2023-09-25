import { getBoards } from "./data-handler";

function formCheckBoards(str) {
  const input = document.querySelector(`.dialog-${str} input`);
  const span = document.querySelector(`.dialog-${str} span`)

  function checkIfExisting(boardName) {
    return getBoards().find((board) => {
      return board === boardName;
    })
  }

  if (input.validity.valueMissing) {
    span.textContent = '*This field is required';
    return false;
  } else if (input.validity.tooShort) {
    span.textContent = '*Input is too short';
    return false;
  } else if (checkIfExisting(input.value)) {
    span.textContent = '*Board already exists';
    return false;
  } else {
    span.textContent = '';
    return true;
  }
}

function formCheckTasks(str) {
  const input = document.querySelector(`.container-input-${str}-title input`);
  const spanInput = document.querySelector(`.container-input-${str}-title span`);
  const textArea = document.querySelector(`.container-input-${str}-description textarea`);
  const spanTextArea = document.querySelector(`.container-input-${str}-description span`);
  const inputDate = document.querySelector(`.container-input-${str}-due-date input`);
  const spanInputDate = document.querySelector(`.container-input-${str}-due-date span`);

  function checkInput() {
    if (input.validity.valueMissing) {
      spanInput.textContent = '*This field is required';
      return false;
    } else if (input.validity.tooShort) {
      spanInput.textContent = '*Input is too short';
      return false;
    } else {
      spanInput.textContent = '';
      return true;
    }
  }

  function checkTextArea() {
    console.log('description')
    if (textArea.validity.valueMissing) {
      spanTextArea.textContent = '*This field is required';
      return false;
    } else if (textArea.validity.tooShort) {
      spanTextArea.textContent = '*Input is too short';
      return false;
    } else {
      spanTextArea.textContent = '';
      return true;
    }
  }

  function checkInputDate() {
    console.log('date')

    if (inputDate.validity.valueMissing) {
      spanInputDate.textContent = '*This field is required';
      return false;
    } else {
      spanInputDate.textContent = '';
      return true;
    }
  };

  function checkAll() {
    const inputIsValid = checkInput();
    const textAreaIsValid = checkTextArea();
    const dateIsValid = checkInputDate();

    if (inputIsValid && textAreaIsValid && dateIsValid) {
      return true;
    } else {
      return false;
    }
  }

  if (checkAll()) {
    return true;
  } else {
    return false;
  }
}

function clearInputFields() {
  const inputFields = document.querySelectorAll('input');
  const inputTextArea = document.querySelector('#input-add-task-description');
  const inputDate = document.querySelector('option[value="low"');

  inputFields.forEach((input) => {
    input.value = '';
  })

  inputTextArea.value = '';

  inputDate.selected = 'true';
}

function preventEnterKey() {
  const forms =  document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    })
  })
}

preventEnterKey();

export { formCheckBoards, formCheckTasks, clearInputFields };