module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern': null,

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
