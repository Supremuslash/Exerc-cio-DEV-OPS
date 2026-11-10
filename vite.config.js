import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        model: fileURLToPath(new URL("./bat-pixel-animation.html", import.meta.url)),
      },
    },
  },
});
