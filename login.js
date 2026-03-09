const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

document.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username === 'admin' && password === 'admin123') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
            reset();
        }
    }
});