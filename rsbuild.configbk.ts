import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import './env';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
    define: {
      'import.meta.env.VITE_BD_ENV_NAME': JSON.stringify(
        import.meta.env.VITE_BD_ENV_NAME,
      ),
      'import.meta.env.VITE_BD_API_HOST': JSON.stringify(
        import.meta.env.VITE_BD_API_HOST,
      ),
      'import.meta.env.VITE_BD_USE_API_MOCK': JSON.stringify(
        import.meta.env.VITE_BD_USE_API_MOCK,
      ),
      'import.meta.env.VITE_BD_APP_VERSION': JSON.stringify(
        import.meta.env.VITE_BD_APP_VERSION,
      ),
    },
  },
});
