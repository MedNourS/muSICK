import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { frontonCompression, obfuscateTailwind, backonProxy } from "@mednours/fronton";

export default defineConfig({
  plugins: [react(), tailwindcss(), obfuscateTailwind(), frontonCompression()],
  base: "./",
  server: {
    proxy: backonProxy("http://localhost:3000"),
  },
});
