import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@Ui": path.resolve("./src/components/Ui"),
      "@lib": path.resolve("./src/lib"),
      "@models": path.resolve("./src/models"),
    },
  },
});
