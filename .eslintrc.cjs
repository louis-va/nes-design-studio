module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.tsx', '.d.ts'],
        },
        alias: {
            extensions: ['.tsx', '.d.ts'],
            map: [
                ['@/assets', './src/components'],
                ['@/auth', './src/components'],
                ['@/components', './src/components'],
                ['@/pages', './src/pages'],
                ['@/utils', './src/utils'],
            ],
        },
    },
},
}
