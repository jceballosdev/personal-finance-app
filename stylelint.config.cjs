// stylelint.config.js
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
