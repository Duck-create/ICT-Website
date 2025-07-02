function loginUser(event) {
  event.preventDefault(); // Prevent default form submit

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  if (username === 'Razaa' && password === 'raza123') {
    window.location.href = 'main.html'; // Redirect to main page
  } else {
    errorMsg.textContent = 'Invalid username or password!';
  }

  return false;
}
