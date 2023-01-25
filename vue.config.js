const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  css: {
    extract: false,
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
