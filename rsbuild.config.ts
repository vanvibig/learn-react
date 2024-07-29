import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginReact(), pluginCheckSyntax(), pluginTypeCheck()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
});
