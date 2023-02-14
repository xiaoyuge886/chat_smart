const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { // 访问时遇到 /api开头的路径，代理到此服务下
        target: 'http://127.0.0.1:8000/api', // 服务器跨域路径
        ws: true, // 允许 websockets协议
        changeOrigin: true, // 开启代理服务器，就会给你代理转发
        pathRewrite: {
          '^/api': '', // 将请求地址中的 /api 前缀替换成空的
          // 如果涉及很多微服务的情况，可以通过定义重写的路径来进行区分微服务
          // 有时我们需要连接本地相同路由下后端电脑的本地服务，
          //需要重写路径来指定访问后端的微服务,否则会影响到其他微服务
        },
      }}
  }

})
