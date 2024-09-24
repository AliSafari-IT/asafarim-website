<?php
// contact/contact.php

// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Include PHPMailer and Dotenv
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load Composer's autoloader
require __DIR__ . '/../vendor/autoload.php';

// Load .env variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/../', ['.envDev', '.envProd']);
$dotenv->load();

// Initialize variables for error and success messages
$contact_success = '';
$message_sent = false;
$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Simple form validation
    if (empty($name) || empty($email) || empty($message)) {
        $error = "All fields are required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email address.";
    } else {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = $_ENV['MAIL_HOST'];
            $mail->SMTPAuth   = true;
            $mail->Username   = $_ENV['MAIL_USERNAME'];
            $mail->Password   = $_ENV['MAIL_PASSWORD'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = $_ENV['MAIL_PORT'];

            // Sender and recipient settings
            $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
            $mail->addAddress('asafarim+authapp@gmail.com', 'Asafarim_authapp');

            // Content settings
            $mail->isHTML(true);
            $mail->Subject = "Contact Form Submission from $name";
            $mail->Body    = "<h2>Contact Form Message</h2>
                              <p><strong>Name:</strong> $name</p>
                              <p><strong>Email:</strong> $email</p>
                              <p><strong>Message:</strong> $message</p>";

            // Send the email
            $mail->send();
            $message_sent = true;
            $contact_success = "Thank you for your message, $name! We will get back to you shortly.";
        } catch (Exception $e) {
            $error = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}

// Set the content for the layout
$content = 'contact_content.php';
include '../layout.php';
