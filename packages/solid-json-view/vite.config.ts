import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    lib: {
      entry: './src/index.ts',
      name: 'solid-json-view',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['solid-js', 'json-utils'],
      output: {
        globals: {
          'solid-js': 'Solid',
          'json-utils': 'JsonUtils',
        },
      },
    },
  },
});
