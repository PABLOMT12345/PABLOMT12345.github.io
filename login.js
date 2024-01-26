document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
})

function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        errorMessage.innerText = 'Please enter a valid email address.';
        return;
    }

    if (passwordInput.value.length < 8) {
        errorMessage.innerText = 'Password must be at least 8 characters long.';
        return;
    }

    errorMessage.innerText = '';


    console.log('Login successful!');
}
