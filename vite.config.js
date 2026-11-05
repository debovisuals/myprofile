import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL(".", import.meta.url)));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, "index.html"),
        gallery: resolve(projectRoot, "gallery/index.html"),
        clientGallery: resolve(projectRoot, "client-gallery/index.html"),
        futaClass25: resolve(projectRoot, "futa-class-25/index.html"),
      },
    },
  },
});
