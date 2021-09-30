module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['./webpack/*', '**/*.config.*', '**/*.test.js'] },
    ],
    'func-names': ['error', 'never'],
    'import/prefer-default-export': 0,
  },
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      node: { paths: ['src'] },
    },
  },
};
