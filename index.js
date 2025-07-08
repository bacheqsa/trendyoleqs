const passwordInput = document.getElementById('password');
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });