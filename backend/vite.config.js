import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import Markdown from "vite-plugin-md";
import svgr from "vite-plugin-svgr";
// include: ["**/*.{md,mdx}"],
export default defineConfig({
    build: {
        rollupOptions: {
            input: "resources/js/app.tsx", // Update this to the correct file
        },
    },
    plugins: [
        laravel({
            input: [
                "resources/js/app.tsx",
                "resources/css/app.css",
                "resources/js/Pages/MarkdownPage.tsx",
                "resources/js/Pages/TagPage.tsx",
            ],
            ssr: "resources/js/ssr.jsx",
            refresh: true,
        }),
        react(
            
        ),
        Markdown(), //when using a plugin to process Markdown
        svgr(),
    ],
    // assetsInclude: ['**/*.md'], // when using Markdown files as plain assets
});
