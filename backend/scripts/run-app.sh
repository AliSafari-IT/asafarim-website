#!/bin/bash
cd /var/www/asafarim.com/UserManagementApp

# Clear Laravel caches
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install dependencies using Yarn
yarn install

# Build assets
yarn build

# Then, test and restart Nginx:
sudo nginx -t
sudo systemctl restart nginx

# Run the development server
yarn dev
