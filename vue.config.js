module.exports = {
  outputDir: 'docs',
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
};
