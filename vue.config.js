module.exports = {
  devServer: {
  },
  ...(() => {
    if (process.env.GITHUB_ACTION) {
      return {
        publicPath: '/kinklist-v2/',
      };
    }
    return {};
  })(),
}
