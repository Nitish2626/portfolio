/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        "sm":"426px",
        "md":"600px",
        "lg":"768px",
        "xl":"1000px",
        "2xl":"1200px",
        "3xl":"1400px",
      },
      backgroundImage:{
        "weather":"url('/src/Images/weather-logo.png')",
        "news":"url('/src/Images/news.jpg')",
        "calculator":"url('/src/Images/Eduinfo.png')",
      },
    }, 
  },
  plugins: [],
}

