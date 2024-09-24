Write-Host "Starting cleanup: Removing node_modules and lock files..."

# Optional: Verify current directory after cd ..
Set-Location ..
Write-Host "Current Directory: $(Get-Location)"

# Remove node_modules folder
if (Test-Path ./node_modules) {
    Write-Host "Removing node_modules folder..."
    Remove-Item -Recurse -Force ./node_modules
} else {
    Write-Host "node_modules folder not found."
}

# Remove yarn.lock if it exists
if (Test-Path ./yarn.lock) {
    Write-Host "Removing yarn.lock file..."
    Remove-Item -Force ./yarn.lock
} else {
    Write-Host "yarn.lock file not found."
}

# Remove package-lock.json if it exists
if (Test-Path ./package-lock.json) {
    Write-Host "Removing package-lock.json file..."
    Remove-Item -Force ./package-lock.json
} else {
    Write-Host "package-lock.json file not found."
}

Write-Host "Done."

# yarn install
if (Get-Command yarn -ErrorAction SilentlyContinue) {
    Write-Host "Installing dependencies with yarn..."
    yarn install
} else {
    Write-Host "Yarn is not installed or not in the system path."
}

Write-Host "Cleanup complete!"
