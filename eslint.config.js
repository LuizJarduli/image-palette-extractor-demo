import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
    rules: {
      "astro/no-exports-from-components": "error",
    },
  },
];
