document.addEventListener('DOMContentLoaded', function () {
    // Get the form and its elements
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginLink = document.getElementById('login-link');

    // Function to validate the form
    signupForm.addEventListener('submit', function (e) {
        // Reset any previous error messages
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

        // Validate email (check if it's not blank)
        if (emailInput.value.trim() === '') {
            e.preventDefault(); // Prevent form submission
            emailError.style.display = 'block';
        }

        // Validate password and confirm password (check if they match)
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault(); // Prevent form submission
            passwordError.style.display = 'block';
        }
    });

    // Redirect to the login page when the "Login" link is clicked
    loginLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = 'login.html'; // Redirect to the login page
    });
});
