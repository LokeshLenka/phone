import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        https: true,
        host: "0.0.0.0",
        hmr: {
            host: "phone-32h0.onrender.com",
            protocol: "https",
        },
    },
});
