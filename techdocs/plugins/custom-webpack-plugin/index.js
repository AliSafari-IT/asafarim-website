// plugins\custom-webpack-plugin\index.js
module.exports = function (context, options) {
    return {
      name: 'custom-webpack-plugin',
      configureWebpack(config, isServer, utils) {
        return {
          devServer: {
            proxy: {
              '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
              },
            },
          },
        };
      },
    };
  };
