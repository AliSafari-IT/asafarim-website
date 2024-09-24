<?php
// dashboard.php

// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Check if the user is logged in; if not, redirect to login page
if (!isset($_SESSION['username'])) {
    header("Location: login/login.php");
    exit();
}

// Include the database connection file
include 'config.php';

// Initialize variables for error and success messages
$update_success = '';
$error = '';

// Fetch the current user's data
$username = $_SESSION['username'];
$sql = "SELECT id, username, name, email FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the updated data from the form
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);

    // Update the user's data in the database
    $sql = "UPDATE users SET name = ?, email = ? WHERE username = ?";
    $stmt->bind_param("sss", $name, $email, $username);

    if ($stmt->execute()) {
        $update_success = "Your profile has been updated successfully!";
        // Update session with new email if needed
        $_SESSION['email'] = $email;
    } else {
        $error = "There was an error updating your profile. Please try again.";
    }
}

// Close the database connection
$stmt->close();
$conn->close();

// Set the content for the layout
$content = __DIR__ . '/dashboard_content.php';
include __DIR__ . '/layout.php';
