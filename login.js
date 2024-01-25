document.getElementById('loginForm').addEventListener('submit', validateForm);
document-addEventListener("DOMContentLoaded", function(){
    console.log("Hello, world!");
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    console.log(inputEmail);
    console.log(inputPassword);
})

function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar email
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.innerText = 'Please enter a valid email address.';
        return;
    }

    // Validar longitud mínima de la contraseña
    if (passwordInput.value.length < 8) {
        errorMessage.innerText = 'Password must be at least 8 characters long.';
        return;
    }

    // Si la validación es exitosa, limpiar el mensaje de error
    errorMessage.innerText = '';

    // Aquí puedes realizar la lógica de inicio de sesión si es necesario
    // Por ahora, simplemente mostraremos un mensaje de éxito en la consola
    console.log('Login successful!');
}
