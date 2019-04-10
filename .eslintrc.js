module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/attribute-hyphenation": "warning",
    "vue/html-end-tags": "warning",
    "vue/html-indent": "warning",
    "vue/html-self-closing": "warning",
    "vue/max-attributes-per-line": "warning",
    "vue/mustache-interpolation-spacing": "warning",
    "vue/name-property-casing": "warning",
    "vue/no-multi-spaces": "warning",
    "vue/require-default-prop": "warning",
    "vue/require-prop-types": "warning",
    "vue/v-bind-style": "warning",
    "vue/v-on-style": "warning",
    "vue/attributes-order": "warning",
    "vue/html-quotes": "warning",
    "vue/no-confusing-v-for-v-if": "warning",
    "vue/order-in-components": "warning",
    "vue/this-in-template": "warning",
    "vue/html-closing-bracket-newline": "warning",
    "vue/html-closing-bracket-spacing": "warning",
    "vue/no-use-v-if-with-v-for": "warning",
    "vue/no-v-html": "warning",
    "vue/prop-name-casing": "warning",
    "vue/script-indent": "warning"
  },

  extends: ["plugin:vue/essential", "@vue/prettier"]
};
