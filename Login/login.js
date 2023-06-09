document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object to hold the user data
    const userData = {
        username: username,
        password: password
    };

    // Make a POST request to the server to handle the login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
        
            console.log(data.message); 
            window.location.href = 'dashboard/dashboard.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
