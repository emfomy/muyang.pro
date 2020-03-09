module.exports = {
  processors: [
    '@mapbox/stylelint-processor-arbitrary-tags',
  ],
  extends: [
    'stylelint-config-airbnb',
  ],
  rules: {
    'at-rule-empty-line-before': ['always', { except: ['blockless-after-blockless'] }],
    'rule-empty-line-before': ['always', { except: ['first-nested'] }],
    'max-nesting-depth': null,
    'selector-max-id': null,
  }
}
