const loaderUtils = require('loader-utils')
// loader 其实就是一个函数
// 将js文件中的 aaa 换成 bbb
module.exports = function (source) {
  // console.log(this.query, loaderUtils.getOptions(this).name);
  // console.log(this.query);
  
  return source.replace(/aaa/g, 'nordon')
}