module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', '@open-wc/eslint-config', 'prettier'],
  plugins: ['html', 'json', 'lit-a11y'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    curly: ['error', 'all'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'always'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'json/*': ['error', 'allowComments'],
    'lit-a11y/click-events-have-key-events': [
      'error',
      {
        'allowList': [
          'jello-icon-button',
          'jello-button'
        ],
        'allowCustomElements': false
      }
    ]
  },
};
