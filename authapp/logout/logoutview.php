<?php
// logoutview.php
?>
<div class="flex items-center justify-center bg-gray-100">
    <div class="w-full min-h-screen bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 class="text-2xl font-bold mb-4">Logout Successful</h2>
        <p class="text-gray-700">You have successfully logged out. What would you like to do next?</p>

        <!-- Menu Options -->
        <div class="button-group mt-6 flex flex-wrap gap-4">
            <a href="<?php echo $base_url; ?>login/login.php"
                class="button py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</a>
            <a href="<?php echo $base_url; ?>index.php"
                class="button py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Go
                to Homepage</a>
            <a href="<?php echo $base_url; ?>register/register.php"          class="button py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Register
                a New Account</a>
            <a href="<?php echo $base_url; ?>contact/contact.php"
                class="button py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Contact
                Support</a>
        </div>
    </div>
</div>