function formCheck() {
  const input = document.querySelector('.dialog-create-board input');
  const span = document.querySelector('.dialog-create-board span')

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

export { formCheck };