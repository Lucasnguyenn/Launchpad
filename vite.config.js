import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  define: {
    "process.platform": JSON.stringify(process.platform),
    "process.env": process.env,
  },
  plugins: [
    lingui(),
    react({
      babel: {
        plugins: ["macros"],
      },
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 3010,
    open: true,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "ui-vendor": ["wagmi"],
        },
      },
    },
  },
});
