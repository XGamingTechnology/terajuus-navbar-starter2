// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Pisah bundle besar jadi chunk kecil
        manualChunks: {
          // React & ReactDOM
          react: ["react", "react-dom"],

          // PDF (file paling besar!)
          pdf: ["react-pdf", "pdfjs-dist"],

          // Icons dan motion
          icons: ["react-icons"],
          motion: ["framer-motion"],

          // React Router
          router: ["react-router-dom"],
        },
      },
    },
    // Naikkan batas warning dari 500KB ke 1000KB
    chunkSizeWarningLimit: 1000,
  },
});
