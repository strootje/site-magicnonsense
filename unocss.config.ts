import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  shortcuts: {
    wrapper: "max-w-[1200px] mx-auto",
    "wrapper-sm": "max-w-[960px] mx-auto",
  },

  theme: {
    colors: {
      primary: "#cec5bb",
      secondary: "#a5968d",
    },
  },

  presets: [
    presetUno(),

    presetWebFonts({
      provider: "bunny",
      fonts: {
        title: "Cormorant Garamond",
        other: "Open Sans",
      },
    }),

    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        solid: () => import("@iconify-json/fa6-solid/icons.json").then((i) => i.default),
        brands: () => import("@iconify-json/fa6-brands/icons.json").then((i) => i.default),
      },
    }),
  ],
});
