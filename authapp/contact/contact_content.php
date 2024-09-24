<?php
// contact/contact_content.php
?>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 class="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <?php if ($message_sent == false): ?>
            <p class="text-gray-600">We'd love to hear from you! Please fill out the form below.</p>

            <form action="contact.php" method="POST" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" required
                        class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required
                        class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows="4" required
                        class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div>
                    <input type="submit" value="Send Message"
                        class="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                </div>
            </form>
        <?php endif; ?>
        <?php if ($message_sent): ?>
            <p class="text-green-600 text-center mt-4"><?php echo $contact_success; ?></p>
        <?php endif; ?>
        <?php if ($error): ?>
            <p class="text-red-600 text-center mt-4"><?php echo $error; ?></p>
        <?php endif; ?>
    </div>
</div>