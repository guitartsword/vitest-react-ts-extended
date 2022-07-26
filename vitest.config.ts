import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    // This is to not import React (similar to create react app)
    jsxInject: `
import React from 'react';
`,
  },
  test: {
    // Do not process css files (is slow)
    css: false,
    environment: 'jsdom',
    // This is to not import test, it, expect, vi (instead of jest). Similar to how jest works
    globals: true,
    setupFiles: ['./vitest/setupTests.ts'],
  },
})
