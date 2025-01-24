import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:", "^@?\\w"], // Node.js built-in and external dependencies
            ["^@api(/.*|$)", "^@config(/.*|$)", "^@logger(/.*|$)", "^@server(/.*|$)", "^@utils(/.*|$)", "^\\."], // Local imports
          ],
        },
      ],
    },
  },
  prettier,
];
