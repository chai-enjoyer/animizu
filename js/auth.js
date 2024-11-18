document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');

    // Retrieve users from localStorage
    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    // Save users to localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Handle Signup
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        const users = getUsers();

        if (users.some(user => user.email === email)) {
            alert('Email already exists. Please log in.');
            return;
        }

        users.push({ name, email, password });
        saveUsers(users);

        alert('Sign-up successful! Please log in.');
        signupForm.reset();
        loginBox.classList.add('visible');
        signupBox.classList.remove('visible');
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const users = getUsers();
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Store logged-in user in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redirect to main page after successful login
            window.location.href = '../index.html';
        } else {
            alert('Invalid email or password.');
        }

        loginForm.reset();
    });

    // Show Signup Form
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.classList.remove('visible');
        signupBox.classList.add('visible');
    });

    // Show Login Form
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupBox.classList.remove('visible');
        loginBox.classList.add('visible');
    });
});
