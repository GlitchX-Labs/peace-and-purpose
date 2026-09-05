import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
  build: {
    lib: {
      entry: "src/animated-icons.jsx",
      formats: ["es"],
      fileName: "animated-icons",
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
