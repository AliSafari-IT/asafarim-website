<!-- guestview.php -->
<div class="min-h-screen flex bg-gray-100">
    <div class="w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 class="md:container md:mx-auto">Welcome to ASAFARIM</h1>
        <div class="md:container md:mx-auto text-warning m-6">Please login or register to access more features.</div>
        <div class="flex space-x-4 md:container md:mx-auto m-6">
            <div><a href="<?php echo $base_url; ?>login/login.php"
                    class="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Login</a></div>
            <div><a href="<?php echo $base_url; ?>register/register.php"
                    class="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">Register</a></div>
        </div>
    </div>
</div>