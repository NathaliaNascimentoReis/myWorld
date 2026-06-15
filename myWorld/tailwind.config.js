/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dream: {
                    dark: '#0d0d1a', // Azul-noite profundo
                    lavender: '#b8a9e0', // Roxo lavanda suave
                    pink: '#e8a0bf', // Rosa empoeirado
                    moonlight: '#f0eeff', // Branco luar
                    cyan: '#7ecef4', // Ciano etéreo
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-medium': 'float 4s ease-in-out infinite',
                'float-fast': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: 0.3 },
                    '50%': { transform: 'translateY(-15px) scale(1.2)', opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
