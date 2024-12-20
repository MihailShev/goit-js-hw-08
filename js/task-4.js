const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', event => {
  event.preventDefault();

  const email = formElem.elements.email.value;
  const password = formElem.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formLoginData = {
      [formElem.elements.email.name]: email,
      [formElem.elements.password.name]: password,
    };
    console.log(formLoginData);
    formElem.reset();
  }
});
