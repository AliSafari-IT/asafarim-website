# run-app.ps1

# Clear Laravel caches
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Run the development server
npm run dev
