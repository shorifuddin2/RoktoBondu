/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
<<<<<<< HEAD
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
=======
    extend: {
      screens: {
        xs: "320px",
      },
    },
>>>>>>> d092fdf00ad835a20c74128db5269c9ea5014e75
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF0000",
          secondary: "#218838",
          accent: "#34495E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
