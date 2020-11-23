module.exports = {
  ignoreFiles: ['.nuxt/**/*', 'docs/**/*', 'src/assets/vendor/**/*'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'], },
    ],
  },
};
