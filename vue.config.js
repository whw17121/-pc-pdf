// 拼接路径
const resolve = (dir) => require("path").join(__dirname, dir);

module.exports = {
  // 根据你的实际情况更改这里
  // outputDir: process.env.VUE_APP_PATH,
  //这里必须要有前面的/，否则报Uncaught SyntaxError: Unexpected token '<'
  // publicPath: `/knowageapp`,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    // disableHostCheck: process.env.NODE_ENV === "development", // 关闭 host check，方便使用 ngrok 之类的内网转发工具
    port: 3333,
    // host: "local.10010.com",
    proxy: {
      "/collegeweb": {
        ws: true,
        changeOrigin: true,
        target: "http://collecttest.10010.com:9100"
      }
    }
  },
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        // prependData: "@import '~@/assets/style.scss';"
      }
    }
  },

  // ...
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  }
  // configureWebpack: (config) => {
  //   config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
  // }
};
