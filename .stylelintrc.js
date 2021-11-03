module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    // CSS
    'color-hex-length': 'long',

    // SCSS
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Global
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
