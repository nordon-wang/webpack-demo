// 1. 构造函数
// 2. prototype中有一个apply方法
class HelloWordPlugin {
  // apply 中有一个 compiler 形参
  apply(compiler){
    console.log('插件执行了');
    // 通过compiler对象可以注册对应的事件，全部的钩子都可以使用
    compiler.hooks.done.tap('HelloWordPlugin', (stats) => {
      console.log('整个webpack打包结束了');
    })

    compiler.hooks.emit.tap('HelloWordPlugin', (compilation) => {
      console.log('触发emit方法');
    })
  }
}

module.exports = HelloWordPlugin