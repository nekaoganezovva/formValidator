document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; 

    if (name === '') {
        errorMessages.innerHTML += '<p>Name cannot be blank.</p>';
        event.preventDefault(); 
    }

    if (email === '') {
        errorMessages.innerHTML += '<p>Email cannot be blank.</p>';
        event.preventDefault(); 
    }

    if (password.length < 8) {
        errorMessages.innerHTML += '<p>Password must be at least 8 characters long.</p>';
        event.preventDefault(); 
    }

    if (password !== repeatPassword) {
        errorMessages.innerHTML += '<p>Passwords do not match.</p>';
        event.preventDefault(); 
    }
});
