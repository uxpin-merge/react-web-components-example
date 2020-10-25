module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/web_components/merge/button/Button.js',
        ]
      }
    ],
    wrapper: 'src/wrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Wrapped Web Components Example'
};
