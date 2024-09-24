<?php
// layout.php

// Start the session
// Check if a session is already started before calling session_start()
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASAFARIM</title>
    <script
        src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
    <script src="<?php echo $base_url; ?>assets/js/toast.js"></script>
    <script>
        // Display the success or error toast messages
        <?php if (isset($_SESSION['register_success'])): ?>
            showToast('<?php echo $_SESSION['register_success']; ?>', '<?php echo $_SESSION['register_success_type']; ?>');
            <?php unset($_SESSION['register_success']); ?>
            <?php unset($_SESSION['register_success_type']); ?>
        <?php endif; ?>

        <?php if (isset($error)): ?>
            showToast('<?php echo $error; ?>', 'danger');
        <?php endif; ?>
    </script>
</head>

<body>
    <?php include 'header.php'; ?>

    <div class="container mx-auto">
        <?php
        // Dynamically include the content page specified
        if (isset($content)) {
            include $content;
        } else {
            echo "<p>No content available.</p>";
        }
        ?>
    </div>

    <?php include 'footer.php'; ?>
</body>

</html>