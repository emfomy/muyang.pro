module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
};
