/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
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