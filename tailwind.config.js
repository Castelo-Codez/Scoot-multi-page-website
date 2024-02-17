/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "p-yellow": "hsl(40, 97%, 58%)",
                "p-yellow-light": "hsl(39, 100%, 94%)",
                "p-dark-grey": "hsl(215, 14%, 23%)",
                "p-dark-navy": "hsl(216, 17%, 35%)",
                "p-dim-grey": "hsl(217, 12%, 62%)",
                "p-light-grey": "hsl(212, 41%, 93%)",
                "p-snow": "hsl(214, 37%, 96%)",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            fontFamily: {
                lexend: "lexend",
                "space-mono": "space-mono",
            },
            container: {
                center: true,
                padding: "15px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
            animation: {
                show: "show .2s ",
            },
            keyframes: {
                show: {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0px, -30px, 0px)",
                    },
                    "100%": {
                        opacity: 1,

                        transform: "translate3d(0px, 0px, 0px)",
                    },
                },
            },
        },
    },
    plugins: [],
};
