<?php
// index.php

// Determine the content based on the user's login status
$content = isset($_SESSION['username']) ? 'dashboard.php' : 'guestview.php';

// Include the layout wrapper
include('layout.php');
