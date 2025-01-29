document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    let formData = new FormData(this);

    fetch('http://localhost/Cosmo%20Airlines/php/login.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('loginResult').textContent = data; // Show server response

        // Redirect if login is successful
        if (data.trim() === "Login successful!") {
            console.log("Login successful! Redirecting...");
            window.location.href = "http://localhost/Cosmo%20Airlines/Booking%20Page/bookingpage1.html";  // Redirect to the booking page
        } else {
            console.log("Login failed or unexpected response:", data);  // Log the failed response
        }
    })
    .catch(error => {
        document.getElementById('loginResult').textContent = 'Error: ' + error;
        console.error('Login error:', error);
    });
});