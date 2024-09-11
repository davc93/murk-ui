/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";



const reactPluginOptions: any = { include: /\.(jsx|js|mdx|md|tsx|ts)$/ };
export default defineConfig({
  
  plugins: [

    react(reactPluginOptions),

    {
        enforce: "pre",
        ...mdx({
          /* jsxImportSource: …, otherOptions… */
        }),
      },
  ],
});
