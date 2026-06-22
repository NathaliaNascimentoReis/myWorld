/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dream: {
                    dark: '#0d0d1a', // Fundo azul-noite profundo
                    lavender: '#b8a9e0', // Roxo lavanda suave
                    pink: '#e8a0bf', // Rosa empoeirado
                    moonlight: '#f0eeff', // Branco luar
                    cyan: '#7ecef4', // Ciano etéreo
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'], // Sonhador / Literário
                sans: ['Inter', 'sans-serif'], // Limpo
            },
            animation: {
                'float-slow': 'floatStar 8s ease-in-out infinite',
                'float-medium': 'floatStar 5s ease-in-out infinite',
                'float-fast': 'floatStar 3.5s ease-in-out infinite',
                'pulse-soft': 'pulseGlow 4s ease-in-out infinite',
            },
            keyframes: {
                floatStar: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: 0.2 },
                    '50%': { transform: 'translateY(-20px) scale(1.3)', opacity: 0.9 },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: 0.4 },
                    '50%': { opacity: 0.8 },
                },
            },
        },
    },
    plugins: [],
};
