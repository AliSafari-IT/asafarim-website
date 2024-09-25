# run-app.ps1

# Clear Laravel caches
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Install dependencies
yarn install

# Build assets
yarn build

# Run the development server
yarn dev
