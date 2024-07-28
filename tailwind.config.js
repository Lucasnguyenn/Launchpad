/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserat: ["Montserrat", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      animation: {
        "text-slide": "text-slide 6s cubic-bezier(.51,.92,.24,1.15) infinite",
        "list-slide": "list-slide 6s cubic-bezier(.51,.92,.24,1.15) infinite",
        partnerslide: "5s slide infinite linear",
      },
      keyframes: {
        "text-slide": {
          "0%, 30%": { transform: "translateY(0%)" },
          "40%, 50%": { transform: "translateY(-25%)" },
          "60%, 70%": { transform: "translateY(-50%)" },
          "80%, 90%": { transform: "translateY(-75%)" },
        },
        "list-slide": {
          "0%, 30%": { transform: "translateY(0%)" },
          "40%, 50%": { transform: "translateY(-2%)" },
          "60%, 70%": { transform: "translateY(-4%)" },
          "80%, 90%": { transform: "translateY(-6%)" },
        },
        partnerslide: {
          "0%, 33.33%": { transform: "translateX(0)" },
          "33.33%, 66.66%": { transform: "  translateX(-100%);" },
          "66.66%, 100%": { transform: "translateX(-200%)" },
        },
      },
    },
    colors: {
      transparentLight: "rgba(0, 0, 0, 0.45)",
      transparentModal: "rgba(0, 0, 0, 0.60)",
      transparent1: "rgba(219, 255, 115, 0.10)",
      transparent2: "rgba(56, 242, 74, 0.10)",
      transparent3: "rgba(30, 30, 30, 0.52)",
      transparent4: "rgba(188, 230, 236, 0.10)",
      transparent5: "rgba(219, 255, 115, 0.10)",
      transparent6: "rgba(39, 218, 78, 0.10)",
      transparent7: "rgba(49, 91, 91, 0.45)",
      transparent8: "rgba(255, 255, 255, 0.60)",
      transparent9: "rgba(255, 255, 255, 0.65)",
      transparent10: "rgba(46, 46, 46, 0.53)",
      transparent11: "rgba(255, 255, 255, 0.76)",
      transparent12: "rgba(88, 161, 160, 0.53)",
      transparent13: "rgba(255, 255, 255, 0.69)",
      transparent14: "rgba(85, 133, 145, 0.55)",
      transparent15: "rgba(44, 44, 44, 0.52)",
      transparent16: "rgba(255, 255, 255, 0.50)",
      transparent17: "rgba(255, 255, 255, 1)",
      transparent18: "rgba(0, 0, 0, 0)",
      transparent19: "rgba(239, 237, 253, 0.60)",

      purple: "#0A070F",
      purpleLight: "#A99CC3",
      purpleNeutral: "#171123",
      purpleSecondary: "#1A1328",
      purplePrimary: "#7A699D",

      white: "#ffffff",
      semiWhite: "#FCFCFD",

      primary: "#110C19",
      yellow: "#DBFF73",
      blue: "#6A45FF",
      blue1: "#BCE6EC",
      blue3: "#B9A9FB",
      blue4: "#94B9FF",

      green: "#1BC171",
      green2: "#49EB45",

      greenYellow: "#38F24A",

      gray: "#808080",
      gray5: "#0D0D0D",
      gray9: "#171717",
      gray1: "#999999",
      darkGray: "#1F1F1F",

      silver: "#B2B2B2",
      black: "#000000",

      red: "#EB5252",
      primary2: "#6B6B6B",
      primary3: "#242424",
      primary4: "#121212",
      primary5: "#808080",
      primary6: "#0D0D0D",
      primary7: "#141414",

      yellow2: "#FFBC39",
      blue: "#6A45FF",
      pink: "#FFA6D6",
      green: "#27DA4E",
    },

    letterSpacing: {
      letter32: "-0.32px",
    },
    fontFamily: {
      anek: ["Anek Odia", "sans-serif"],
      russo: ["Russo One", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      varela: ["Varela Round", "sans-serif"],
      cabin: ["Cabin", "sans-serif"],
      syne: ["Syne", "sans-serif"],
      harabaras: ["Harabaras", "sans-serif"],
      oxanium: ["Oxanium", "sans-serif"],
    },
    backgroundImage: {
      bgMedia: "linear-gradient(97deg, #162B8D 0.41%, #C11652 109.06%);",
      bgMediaEcosytem: "linear-gradient(91deg, #C2045A 0.41%, #142C91 104.54%);",
      bgMediaEcosytemHover: "linear-gradient(90deg, rgba(130, 36, 79, 0.5) 0.12%, rgba(54, 38, 88, 0.5) 100.09%);",
      rectangleEcosytem: "linear-gradient(121deg, rgba(255, 255, 255, 0.40) 16.33%, rgba(255, 255, 255, 0.10) 72.68%);",
      bgHubNetworkAchieved: "linear-gradient(270deg, #C51551 6.67%, #162B8D 98.53%);",
    },
  },
  plugins: [],
};
