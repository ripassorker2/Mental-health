/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#fedfda",
                secondary: "#e1f5f4",
                dark: "#2D3748",
                white: "#F7FAFC",
            },
        },
    },

    plugins: [],
};
