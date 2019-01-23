module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {
      stage: 0
    },
    'stylelint': {
      fix: true
    },
    'postcss-custom-media': {},
    'postcss-preset-env': {
      warnForDuplicates: false,
      browsers: ['last 2 versions']
    },
    'cssnano': ctx.env === 'production' ? {} : false,
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
});
