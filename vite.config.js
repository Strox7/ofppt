import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
  },
  resolve: {
    alias: {
      "echarts-for-react": "echarts-for-react/lib/core",
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit to 1MB
  },
});
