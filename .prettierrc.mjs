/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: 'avoid',
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 100,
  tabWidth: 2,
};
