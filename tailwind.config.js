/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                inusi: {
                    blue: '#1e3a8a',
                    red: '#dc2626',
                    gold: '#eab308',
                    dark: '#0f172a',
                    light: '#f8fafc',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Rajdhani', 'sans-serif'], // <--- Nova fonte aqui
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite', // Para elementos rotativos lentos (engrenagens)
            }
        },
    },
    plugins: [],
}