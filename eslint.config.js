import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import {ReactThreeFiber} from '@react-three/fiber'


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactHooks,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@react-three': ReactThreeFiber,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,          // 👈 added
      ...react.configs['jsx-runtime'].rules,       // 👈 added
      ...reactHooks.configs.recommended.rules,     // 👈 added
      'react/jsx-no-target-blank': 'off',          // 👈 added
      'react/no-unknown-property': 'off',          // 👈 added (important for Three.js!)
      'react-refresh/only-export-components': [    // 👈 added
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])