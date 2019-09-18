

// tapable 的构造函数内部定义的钩子
this.hooks = {
  afterPlugins: new SyncHook(),
  beforeRun: new SyncHook(),
  run: new SyncHook(),
  make: new SyncHook(),
  afterCompiler: new SyncHook(),
  shouldEmit: new SyncHook(),
  emit: new SyncHook(),
  afterEmit: new SyncHook(['compilation']),
  done: new SyncHook(),
}

// 触发所有插件的apply方法， 并传入Compiler对象
if(Array.isArray(this.config.plugins)){
  this.config.plugins.forEach(plugin => {
    plugin.apply(this)
  });
}