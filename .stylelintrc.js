module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // CSS
    'color-hex-length': 'long',

    // SCSS
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Pseudo Element
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
