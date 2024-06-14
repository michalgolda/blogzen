import type { Config } from "tailwindcss";
import daisyui, { light } from "daisyui";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  daisyui: {
    theme: false,
    darkTheme: "blogzen",
    themes: [
      {
        blogzen: {
          ...light,
          primary: "#7D41E2",
          secondary: "#fc745c",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
