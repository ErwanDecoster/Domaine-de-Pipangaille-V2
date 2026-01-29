import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist/**', '.vercel/**', '.astro/**'],
  },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.astro', '**/*.js', '**/*.ts'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    rules: {
    },
  },
]
