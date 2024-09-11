/* eslint-disable @typescript-eslint/no-explicit-any */
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/

const reactPluginOptions: any = { include: /\.(jsx|js|mdx|md|tsx|ts)$/ };
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/lib/components/index.ts"),
      name: "murk-react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(reactPluginOptions),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),

    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
  ],
});
