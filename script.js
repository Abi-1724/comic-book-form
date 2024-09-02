

function toggleForms() {  
    const loginForm = document.getElementById('login-form');  
    const signupForm = document.getElementById('signup-form');  
    loginForm.classList.toggle('hidden');  
    signupForm.classList.toggle('hidden');  
}  

function login(event) {  
    event.preventDefault();  
    const username = document.getElementById('login-username').value;  
    const password = document.getElementById('login-password').value;  

    // Simple validation (you can add more complex validation)  
    if (username && password) {  
        alert(`Login successful!\nUsername: ${username}`);  
        // Here you can add code to send data to your server  
    } else {  
        alert('Please fill in all fields.');  
    }  
    return false; // Prevent form submission  
}  

function signup(event) {  
    event.preventDefault();  
    const username = document.getElementById('signup-username').value;  
    const email = document.getElementById('signup-email').value;  
    const password = document.getElementById('signup-password').value;  

    // Regular expression for email validation  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
        alert('Please enter a valid email address.');  
        return false;  
    }  

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return false;
    }  

    alert(`Registration successful! ${username}`);  
    // Here you can add code to send data to your server  
    return false; // Prevent form submission  
}
