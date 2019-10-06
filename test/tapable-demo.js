const { SyncHook } = require('tapable')
/**
 * 学习前端
 * 学习过程 1.准备 2.学html 3.学css 4.学js 5.学框架
 * 学习的每个过程就类似于生命周期
 */
class Frontend{

  constructor(){
    // 1. 定义生命周期钩子
    this.hooks = {
      beforeStudy: new SyncHook(),
      afterHtml: new SyncHook(),
      afterCss: new SyncHook(),
      afterJs: new SyncHook(),
      // 需要传递的参数 需要在 new SyncHook() 的时候定义好
      afterFrame: new SyncHook(['name']),
    }
  }

  study(){
    // 3. 在合适的时候 调用
    console.log('准备');
    this.hooks.beforeStudy.call()
    console.log('准备学html');
    this.hooks.afterHtml.call()
    console.log('准备学css');
    this.hooks.afterCss.call()
    console.log('准备学js');
    this.hooks.afterJs.call()
    console.log('准备学框架');
    this.hooks.afterFrame.call('vue、react')
  }
}

const f = new Frontend()

// 2. 注册事件
f.hooks.afterHtml.tap('afterHtml', () => {
  console.log('学完html，完成了一部分前端知识');
})

f.hooks.afterJs.tap('afterJs', () => {
  console.log('学完js，完成了一部分前端知识');
})

f.hooks.afterFrame.tap('afterFrame', (name) => {
  console.log(`学完了${name}框架，天下无敌....`);
})


f.study()