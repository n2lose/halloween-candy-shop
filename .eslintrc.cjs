module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
   settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ],
    'import/prefer-default-export': ['off' | 'warn' | 'error', { target: 'any' }],
    "react/function-component-definition": [<enabled>, {
      "namedComponents": "function-declaration" | "function-expression" | "arrow-function" | Array<"function-declaration" | "function-expression" | "arrow-function">,
      "unnamedComponents": "function-expression" | "arrow-function" | Array<"function-expression" | "arrow-function">,
    }],
  },
  ignorePatterns: ['vite.config.ts']
}
