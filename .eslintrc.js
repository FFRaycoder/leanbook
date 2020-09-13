module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    indent: 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0
      }
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/html-quotes': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-prop-types': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/require-name-property': 'error'
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
