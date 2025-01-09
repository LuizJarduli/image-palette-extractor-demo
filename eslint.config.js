import eslintPluginAstro from 'eslint-plugin-astro';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'astro/no-exports-from-components': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
