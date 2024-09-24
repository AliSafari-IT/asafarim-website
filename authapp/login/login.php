<?php
// login/login.php

// Include the database connection file
include '../config.php';
session_start();

$error = ''; // Initialize error message variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Use prepared statements for security
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $_POST['email']);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($_POST['password'], $row['password'])) {
            // Successful login
            $_SESSION['username'] = $row['username'];
            $_SESSION['login_success'] = 'Login successful!'; // Set success message
            $_SESSION['login_success_type'] = 'success'; // Set the toast type
            header("Location: ".$base_url."dashboard.php");
            exit();
        } else {
            $error = "Incorrect password.";
        }
    } else {
        $error = "No account found with that email.";
    }
    $stmt->close();
}

// Set the content file to the login form
$content = 'loginform.php';

// Include the layout wrapper
include '../layout.php';
