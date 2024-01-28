/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans':['Inter'],
      'serif': ['Space Grotesk'],

    },
    extend: {
      colors:{
        primary:"#FEAF31",
        text_primary:"#fff"

        


        

      },
    },
  },
  plugins: [],
}

