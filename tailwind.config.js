/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      // clases personalizadas
      maxWidth: {
        256: "80rem",
      },
      width: {
        28: "6rem",
      },
    },
  },
  plugins: [],
};
