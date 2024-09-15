document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Dummy credentials
    if (userId === 'user' && password === 'password') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials');
    }
});
