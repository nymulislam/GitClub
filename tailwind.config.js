/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js, ts, jsx, tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'git-bg': '#1b262c',
                'git-card': '#21323b',
                'git-accent': '#8a9a5b',
                'git-copper': '#d4a373',
                'git-text': '#e0e0e0',
            },
        },
    },
    plugins: [],
}