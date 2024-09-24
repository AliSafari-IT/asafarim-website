<?php
// logout.php

session_start(); // Start the session

// Destroy the session
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session

// Start a new session to store the logout message
session_start();
$_SESSION['logout_success'] = 'You have successfully logged out.';

// Set the content file to the logout view
$content = 'logoutview.php';

// Include the layout wrapper
include __DIR__ . '/../layout.php';
