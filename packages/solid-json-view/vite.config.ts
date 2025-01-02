import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    lib: {
      entry: './src/index.ts',
      name: 'solid-json-view',
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js'; // ES module
        return 'index.js'; // UMD/CommonJS
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['solid-js', '@ryantipps/json-utils'],
      output: {
        globals: {
          'solid-js': 'Solid',
          '@ryantipps/json-utils': 'JsonUtils',
        },
      },
    },
  },
});
