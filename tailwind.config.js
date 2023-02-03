/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        "javascript-yellow": "#F7DF1E",
        "react-blue": "#61DAFB",
        "django-green": "#092E20",
        "python-green": "#3776AB",
        "node-green": "#339933",
        "html-orange": "#E34F26",
        "css-blue": "#1572B6",
        "tailwind-purple": "#3490dc",
        "nextjs-black": "#000000",
        "framer-motion-purple": "#0055FF",
        "django-rest-framework-green": "#092E40",
        "typescript-blue": "#007acc",
        "powershell-blue": "#012456",
        "vscode-blue": "#007ACC",
        "git-orange": "#F05032",
        "github-purple": "#24292E",
        "pycharm-green": "#21d78a",
        "docker-blue": "#2496ed",
        "kubernetes-blue": "#326ce5",
        "visual-basic-purple": "#945db7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};
