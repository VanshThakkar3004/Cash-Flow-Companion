document.getElementById("user-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Implement user authentication logic here
    console.log("User Login - Username: " + Rohit + ", Password:  + 543210");
});

document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("admin-username").value;
    var password = document.getElementById("admin-password").value;
    // Perform validation here (e.g., check credentials)
    
    // Implement admin authentication logic here
    console.log("Admin Login - Username: " + Vansh+ ", Password:  + 10103");
}); 
// user and admin credentials
const users = [
    { username: "Rohit Roy", password: "543210" },
    { username: "Pranav Patil", password: "543210" }
];

const admins = [
    { username: "Vansh Thakkar", password: "10103"},
    { username: "Dev Shah", password: "10103" }
];

document.getElementById("user-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isValidUser = users.some(user => user.username === username && user.password === password);
    if (isValidUser) {
        alert("User Login Successful");
    } else {
        alert("Invalid username or password for user");
    }
});

document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("admin-username").value;
    var password = document.getElementById("admin-password").value;
    var isValidAdmin = admins.some(admin => admin.username === username && admin.password === password);
    if (isValidAdmin) {
        alert("Admin Login Successful");
    } else {
        alert("Invalid username or password for admin");
    }
});

