<?php
// D:\Ampps\www\source\projects\asafarim\backend\index.php
// Get the hostname to determine if the environment is local or production
$host = $_SERVER['HTTP_HOST'];
// Redirect to the production index.php
header("Location: /apps/laravel/public/index.php");
exit;