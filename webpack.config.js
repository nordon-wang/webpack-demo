const path = require('path')
const HelloWordPlugin = require('./plugins/HelloWordPlugin')
const HTMLPlugin = require('./plugins/HTMLPlugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,  './dist'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test:/\.js/,
        use:['./loader/loader1.js']
      },
      // {
      //   test:/\.js/,
      //   use:{
      //     path: './loader/loader1.js',
      //     options:{
      //       name:'nordon'
      //     }
      //   }
      // }
    ]
  },
  plugins:[
    new HelloWordPlugin(),
    // new HTMLPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html'
    // })
  ]
}