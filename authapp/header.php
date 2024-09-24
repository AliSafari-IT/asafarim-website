<!-- header.php -->
<?php include __DIR__ . '/config.php'; ?>

<header class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-lg font-bold">
            <a href="<?php echo $base_url; ?>index.php">ASAFARIM</a>
        </div>
        <nav>
            <ul class="flex space-x-4">
                <li><a href="<?php echo $base_url; ?>index.php" class="hover:text-gray-400">Home</a></li>
                <?php if (isset($_SESSION['username'])): ?>
                    <li><a href="<?php echo $base_url; ?>dashboard.php" class="hover:text-gray-400">Dashboard</a></li>
                    <li><a href="<?php echo $base_url; ?>logout/logout.php" class="hover:text-gray-400">Logout</a></li>
                <?php else: ?>
                    <li><a href="<?php echo $base_url; ?>login/login.php" class="hover:text-gray-400">Login</a></li>
                    <li><a href="<?php echo $base_url; ?>register/register.php" class="hover:text-gray-400">Register</a></li>
                <?php endif; ?>
                <li><a href="<?php echo $base_url; ?>contact/contact.php" class="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
