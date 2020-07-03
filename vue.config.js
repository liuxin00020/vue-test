module.exports = {
  devServer: {
    port: 8082,
    proxy: {
      "^/api": {
        target: "http://apis.juhe.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },
  css: {
    // requireModuleExtension: false,  // 这句话不能要，否则css样式不起效
    loaderOptions: {
      less: {
        // 这里的选项会传递给 less-loader
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px"
          },
          javascriptEnabled: true // 这句话必须要，否则不起效
        }
      }
    }
  }
};
