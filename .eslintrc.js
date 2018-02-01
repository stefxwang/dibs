module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    es6: true,
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': ['off'],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
  },
  overrides: [
    {
      files: ['client/**/*.js'],
      env: {
        browser: true,
        commonjs: false,
        node: false,
      },
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
        },
        ecmaVersion: 8,
        sourceType: 'module',
      },
    },
    {
      files: ['server/**/*.js'],
      env: {
        browser: false,
        commonjs: true,
        node: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};