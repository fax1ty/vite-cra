import eslintPlugin from "@nabla/vite-plugin-eslint";
import autoprefixer from "autoprefixer";
import postcssLogical from "postcss-logical";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { swcReactRefresh } from "vite-plugin-swc-react-refresh";

export default defineConfig({
  plugins: [swcReactRefresh(), svgr(), eslintPlugin()],
  esbuild: { jsx: "automatic" },
  css: {
    postcss: {
      plugins: [autoprefixer, postcssLogical],
    },
  },
});
