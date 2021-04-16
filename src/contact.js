const Contact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('class', 'container mt-5');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('class', 'form-control m-3');
  inputName.setAttribute('placeholder', 'Name');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('class', 'form-control m-3');
  inputEmail.setAttribute('placeholder', 'Email');

  const inputMessage = document.createElement('textarea');
  inputMessage.setAttribute('name', 'message');
  inputMessage.setAttribute('class', 'form-control m-3');
  inputMessage.setAttribute('rows', '8');
  inputMessage.setAttribute('cols', '80');
  inputMessage.setAttribute('placeholder', 'Message');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('class', 'btn btn-primary m-3');
  submitButton.textContent = 'Send';

  const inputs = [inputName, inputEmail, inputMessage, submitButton];
  for (let i = 0; i < inputs.length; i += 1) {
    contact.appendChild(inputs[i]);
  }

  return contact
}

export default Contact
