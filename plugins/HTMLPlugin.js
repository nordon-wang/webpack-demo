const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

class HTMLPlugin {
  constructor(options){
    // 插件的参数，filename、template等
    this.options = options
  }

  apply(compiler){
    // 注册 afterEmit 钩子
    // 如果使用done钩子，则需要使用stats.compilation.assets获取，而且会比 afterEmit 晚一些
    compiler.hooks.afterEmit.tap('HTMLPlugin', (compilation) => {
      // 根据模板读取html文件内容
      const result = fs.readFileSync(this.options.template, 'utf-8')
      // 使用 cheerio 来分析 HTML
      let $ = cheerio.load(result)
      // 创建 script 标签后插入HTML中
      Object.keys(compilation.assets).forEach(item => {
        // $(`<script src="/${item}"></script>`).appendTo('body')
        // 为了方便调试将路径修改为相对路径
        $(`<script src="${item}"></script>`).appendTo('body')
      })
      // 转换成新的HTML并写入到 dist 目录中
      fs.writeFileSync(path.join(process.cwd(), 'dist', this.options.filename), $.html())
    })
  }
}

module.exports = HTMLPlugin