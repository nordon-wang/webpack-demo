const loaderUtils = require('loader-utils')
// loader 其实就是一个函数
// 将js文件中的 aaa 换成 bbb
module.exports = function (source) {
  console.log('我是 handlerLoader -- ', loaderUtils.getOptions(this));
  const optionsName = loaderUtils.getOptions(this) && loaderUtils.getOptions(this).name || '默认的信息'
  return source.replace(/信息/g, optionsName)
}