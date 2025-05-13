import { defineConfig } from "@solidjs/start/config";
import { default as unocss } from "unocss/vite";
import { imagetools } from "vite-imagetools";
import type {Plugin} from 'vinxi';

export default defineConfig({
  ssr: true,

  vite: {
    plugins: [
      unocss() as Plugin[],
      imagetools() as Plugin
    ],
  },
});
