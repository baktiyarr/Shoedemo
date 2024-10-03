document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required!';
        alert('Both fields are required!');
        return;
    }
    
    // Check for correct credentials (for demonstration purposes only)
    if (username === 'baktiyar' && password === 'AAAAAA') {
        document.getElementById('error-message').textContent = 'Good Luck';
        alert('Login successful!');
        // Redirect or perform other actions on successful login
    } else {
        document.getElementById('error-message').textContent = 'Please Try Again!';
        alert('Invalid username or password!');
    }
});
