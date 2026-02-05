import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'personality-test',
  web: {
    host: '0.0.0.0',
    port: 3003,
    commands: {
      dev: 'rsbuild dev --host 0.0.0.0',
      build: 'rsbuild build',
    },
  },
  permissions: [],
  outdir: 'dist',
  brand: {
    displayName: '진짜 나',
    icon: 'https://raw.githubusercontent.com/jino123413/app-logos/master/personality-test.png',
    primaryColor: '#7C4DFF',
    bridgeColorMode: 'basic',
  },
  webViewProps: {
    type: 'partner',
  },
});
