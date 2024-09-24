<?php
// dashboard_content.php
?>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 class="text-2xl font-bold text-gray-900">Welcome, <?php echo htmlspecialchars($user['username']); ?>!</h2>
        <p class="text-gray-600">Here you can update your profile details.</p>

        <form action="dashboard.php" method="POST" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700">Username (cannot be changed):</label>
                <input type="text" name="username" value="<?php echo htmlspecialchars($user['username']); ?>"
                    disabled class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm hover:cursor-not-allowed">
            </div>

            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" name="name" value="<?php echo htmlspecialchars($user['name']); ?>" required
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm">
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm">
            </div>

            <div>
                <input type="submit" value="Update Profile"
                    class="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            </div>
        </form>
        <div class="flex justify-between mt-4">
            <a href="index.php" class="text-indigo-600 hover:text-indigo-500">Back to Home</a>
            <a href="logout.php" class="text-red-600 hover:text-red-500">Logout</a>
        </div>
    </div>
</div>
