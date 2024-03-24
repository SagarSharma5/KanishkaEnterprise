/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                monty: ["Montserrat", "sans-serif"],
                poppins: ["Poppins"],
            },
            colors: {
                ke_blue: '#272E4F',
                ke_orange: '#FF5E3A'
            }
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
}