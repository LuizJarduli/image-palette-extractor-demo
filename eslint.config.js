import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  ...eslintPluginAstro.configs['react-recommended'],
  ...eslintPluginAstro.configs['react-hooks-recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      'astro/no-exports-from-components': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/prop-types': 'off',
    },
  },
];
