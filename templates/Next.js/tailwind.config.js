/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '3rem',
                xl: '4rem',
            },
        },
        colors: {
            transparent: colors.transparent,
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            background: '#0d1118',
            main: '#00abe4',
            second: '#8ebfff',
            third: '#171d29',
        },
    },
    plugins: [],
};
