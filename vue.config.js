module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          directives: {
            show(el, dir) {
              // Works in 2.6 but not 2.7
              console.log('v-show')
            }
          }
        }

        return options;
      })
  }
}
