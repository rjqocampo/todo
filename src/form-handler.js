function formCheck(str) {
  const input = document.querySelector(`.dialog-${str} input`);
  const span = document.querySelector(`.dialog-${str} span`)

  if (input.validity.valueMissing) {
    span.textContent = 'This field is required';
    return false;
  } else if (input.validity.tooShort) {
    span.textContent = 'Input is too short';
    return false;
  } else {
    span.textContent = '';
    return true;
  }
}

function formCheckTasks(str) {
  const input = document.querySelector(`.container-input-${str}-title input`);
  const spanInput = document.querySelector(`.container-input-${str}-title span`);
  const textArea = document.querySelector(`.container-input-${str}-description textarea`)
  const spanTextArea = document.querySelector(`.container-input-${str}-description span`)

  console.log(spanTextArea)
  function checkInput() {
    if (input.validity.valueMissing) {
      spanInput.textContent = 'This field is required';
      return false;
    } else if (input.validity.tooShort) {
      spanInput.textContent = 'Input is too short';
      return false;
    } else {
      spanInput.textContent = '';
      return true;
    }
  }

  function checkTextArea() {
    if (textArea.validity.valueMissing) {
      spanTextArea.textContent = 'This field is required';
      return false;
    } else if (textArea.validity.tooShort) {
      spanTextArea.textContent = 'Input is too short';
      return false;
    } else {
      spanTextArea.textContent = '';
      return true;
    }
  }

  console.log(checkInput());
  console.log(checkTextArea());

  if (checkInput() && checkTextArea()) {
    return true;
  } else 
    return false;
}

export { formCheck, formCheckTasks };