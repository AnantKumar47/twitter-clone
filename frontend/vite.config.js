import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // ONLY affects local dev
      "/api": {
        target: "http://localhost:5000", // local backend
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist", // default is fine, change only if needed
  },
  base: "/", // important for correct routing in production
});
