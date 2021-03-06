const sass = require('@stencil/sass')

exports.config = {
  outputTarget: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ],
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass()
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
