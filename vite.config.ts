import MillionLint from '@million/lint';
import { PluginOption, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { resolve } from 'path'

// https://vitejs.dev/config/
const plugins = [react()];
plugins.unshift(MillionLint.vite() as PluginOption[])
export default defineConfig({
  plugins: plugins,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@elements': path.resolve(__dirname, 'src/elements'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@texts': path.resolve(__dirname, 'src/texts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@app': path.resolve(__dirname, 'src')
    }
    
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'my-lib',
      formats: ['cjs', 'es'],
    }
  }
});