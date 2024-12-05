export default [
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: "./tsconfig.json",
        },
      },
      plugins: {
        "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      },
      rules: {
        "no-unused-vars": "off", // Desative regra do JS padrão
        "@typescript-eslint/no-unused-vars": ["error"], // Use a do TypeScript
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 2],
      },
    },
  ];
  