// D:\Ampps\www\source\projects\asafarim\backend\resources\js\app.tsx
import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { ThemeProvider } from "@material-tailwind/react";
import { initializeIcons } from '@fluentui/react'; 
// Initialize Fluent UI icons
// initializeIcons();

const appName = import.meta.env.VITE_APP_NAME || 'ASafariM';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<ThemeProvider><App {...props} /></ThemeProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
