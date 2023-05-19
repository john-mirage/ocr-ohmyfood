import { defineConfig } from "vite";
import { resolve } from "path";

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        restaurant1: resolve(__dirname, "a-la-francaise.html"),
        restaurant2: resolve(__dirname, "la-note-enchantee.html"),
        restaurant3: resolve(__dirname, "la-palette-du-gout.html"),
        restaurant4: resolve(__dirname, "le-delice-des-sens.html"),
      },
    },
  },
});
