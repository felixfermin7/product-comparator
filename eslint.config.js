import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      semi: ['error', 'always'], // Require semicolons
      quotes: ['error', 'single'], // Enforce single quotes
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'prefer-destructuring': ['error', { object: true, array: true }],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'no-unsafe-optional-chaining': ['error'],
      'default-param-last': ['error'],
      'no-var': ['error'],
      'prefer-const': ['error'],
      'prefer-promise-reject-errors': ['error'],
      'no-return-await': ['error'],
      'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }], // Disallow unused const and let
      'eol-last': ['error', 'always'], // Require newline at the end of files
    },
  },
]);
