const XDcloudPageMobilePlugin = [
  'component',
  {
    libraryName: '@x-apaas/x-dcloud-page-mobile',
    styleLibrary: {
      base: false,
      name: 'theme-chalk/theme'
    },
    ext: '.scss'
  },
  '@x-apaas/x-dcloud-page-mobile'
]

module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: [
    XDcloudPageMobilePlugin,
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
