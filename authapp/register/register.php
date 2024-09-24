<?php
// register/register.php
include __DIR__ . '/../config.php'; 

session_start();

$error = ''; // Initialize error message variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $username = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, username, email, password) VALUES ('$name','$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['register_success'] = 'Registration successful! You can login now.';
        $_SESSION['register_success_type'] = 'success'; // Set the toast type
        header("Location: login/login.php");
        exit();
    } else {
        $error = "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Set the content file to the registration form
$content = 'registerform.php';

// Include the layout wrapper
include __DIR__ . '/../layout.php';