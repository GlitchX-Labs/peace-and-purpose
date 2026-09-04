import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
