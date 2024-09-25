import fs from 'fs-extra';
import path from 'path';

// Define the source and destination paths for manifest.json
const src = path.resolve('public/build/.vite/manifest.json');
const dest = path.resolve('public/build/manifest.json');

// Move manifest.json from .vite folder to build folder using async/await
(async () => {
    try {
        await fs.move(src, dest, { overwrite: true });
        console.log('manifest.json moved successfully!');
    } catch (err) {
        console.error('Error moving manifest.json:', err);
    }
})();
