/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#EF863E",
        tertiary: "#F3F4F6",
        danger: "#EF4444",
      },
      backgroundImage: {
        "auth-bg-img": "url('/assets/images/auth-img.png')",
        "profile-bg-img": "url('/assets/images/profile-bg.png')",
        
      }
    },
  },
  plugins: [],
}

