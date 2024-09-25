# UserManagementApp\scripts\server-install.sh
# Pull the project from your Git repository
cd /var/www/asafarim.com/asafarim-workspace
git pull origin develop
cd UserManagementApp

# Install PHP dependencies
composer install --optimize-autoloader --no-dev

# Install Node.js dependencies
yarn install  # Or use yarn install if you are using Yarn

# Compile the assets for production
yarn build # or `yarn build` if you use yarn

# Run migrations and seed the database
php artisan migrate --force
php artisan db:seed
