function validateForm() {
    let isValid = true;
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.trim() === '') {
        usernameError.textContent = 'Please enter a username';
        isValid = false;
    } else {
        usernameError.textContent = ''; 
    }

    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactRegex = /^\d{10}$/; 
    if (!contact.match(contactRegex)) {
        contactError.textContent = 'Please enter a valid 10-digit contact number';
        isValid = false;
    } else {
        contactError.textContent = ''; 
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = ''; 
    }

    const password = document.getElementById('pwd').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else {
        passwordError.textContent = ''; 
    }

    return isValid;
}
