// Detect the current environment
const isProduction = typeof window !== "undefined" && (window.location.hostname === 'www.asafarim.be' || window.location.hostname === 'asafarim.be' || window.location.hostname === 'www.asafarim.com' || window.location.hostname === 'asafarim.com');

// Define base paths for different environments
// const basePath = isProduction ? "/apps/laravel/public" : "/";
const basePath = "/";

// Normalize the base path to ensure it doesn't end with a '/'
const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;

/**
 * Helper function to construct a complete asset path.
 * @param relativePath - The relative path to construct.
 * @returns The constructed path.
 * @example createPath("img/AvatarAli.png") -> "/apps/laravel/public/img/AvatarAli.png"
 * @example createPath("/img/AvatarAli.png") -> "/apps/laravel/public/img/AvatarAli.png"
 */
export const createPath = (relativePath: string): string => {
    // Ensure the input path starts with '/'
    const normalizedPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

    // Construct and return the final path
    return `${normalizedBasePath}${normalizedPath}`;
}
