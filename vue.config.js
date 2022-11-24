/*
 * @Author: your name
 * @Date: 2020-07-23 17:45:00
 * @LastEditTime: 2021-07-08 20:21:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xdap-h5\vue.config.js
 */
const path = require('path') // 引入path模块

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: isProd(),
  transpileDependencies: [/.*@x-apaas\/x-lib-rule-engine.*/, '@x-apaas/x-lib-rule-engine'],
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      },
      sass: {
        prependData: `
          @import "@/assets/scss/variable/index.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: '8080',
  //   disableHostCheck: true,
  //   https: false,
  //   hotOnly: false,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   }
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://portal.definesys.com:30502',
  //   //     changeOrigin: true,
  //   //     pathRewrite: {
  //   //       '^/api': '/'
  //   //     }
  //   //   }
  //   // }
  // },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: () => ({
    name: 'vue-cli3-template',
    module: {
      rules: [
        {
          test: /\.mjs$/,

          include: /node_modules/,

          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      alias: {
        // vue动态值
        vue$: 'vue/dist/vue.esm.js',

        // vue快速路径
        '@': resolve('src')
      }
    },
    plugins: []
  }),
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('./src')).set('components', resolve('./src/components'))
    // set第一个参数：设置的别名，第二个参数：设置的路径

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    // svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    // svgRule.exclude.add(/node_modules/);
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icon'))
      .add(resolve('./src/lib/ui/assets/icon'))
      .add(resolve('../x-dcloud-page-mobile/lib/assets/icon'))
      .add(resolve('../../XUI/x-dcloud-page-mobile/lib/assets/icon'))
      .add(
        resolve(
          './node_modules/_@x-apaas_x-dcloud-page-mobile@0.3.3@@x-apaas/x-dcloud-page-mobile/lib/assets/icon'
        )
      )
      .add(
        resolve(
          './node_modules/_@x-apaas_x-dcloud-page-mobile@0.2.0-rc.0@@x-apaas/x-dcloud-page-mobile/lib/assets/icon'
        )
      )
      .add(resolve('./node_modules/@x-apaas/x-dcloud-page-mobile/lib/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-[name]'
      })
  }
}
