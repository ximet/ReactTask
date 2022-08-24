module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import',
    'prettier',
    'typescript-plugin-css-modules'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'no-plusplus': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'max-lines': ['error', { max: 200 }],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'react/require-default-props': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
