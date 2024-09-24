<?php
// config.php
$base_url = '/source/projects/asafarim/authapp/';
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env file

$dotenv = Dotenv::createImmutable(__DIR__, ['.envDev', '.envProd']);
$dotenv->load();

// Database configuration
$db_server = $_ENV['DB_HOST'];
$db_user = $_ENV['DB_USERNAME'];
$db_password = $_ENV['DB_PASSWORD'];
$db_name = $_ENV['DB_DATABASE'];

// Create connection
$conn = new mysqli($db_server, $db_user, $db_password, $db_name);

// Verbinding
try {
    $dbh = new PDO("mysql:host=$db_server;dbname=$db_name", $db_user, $db_password);
    $_SESSION['db_success'] = 'Verbinding met de database is succesvol tot stand gebracht.';
    $_SESSION['db_error'] = '';
} catch (PDOException $e) {    
    die('Verbindingsfout: ' . $e->getMessage());
}
?>