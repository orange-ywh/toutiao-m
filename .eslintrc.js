module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 'off',
    'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'indent': 'off',
    'space-before-function-paren': 'off',
    'keyword-spacing': 'off',
    'spaced-comment': 'off',
    'key-spacing': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'comma-spacing': 'off',
    'space-before-blocks': 'off',
    'padded-blocks': 'off',
    'quotes': 'off',
    'semi': 'off',
    'quote-props': 'off',
    'no-multiple-empty-lines': 'off',
    'vue/no-unused-vars': 'off',
    'no-useless-return': 'off',
    'eol-last':'off'
  }
}
