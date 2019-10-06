(function (modules) { // 将所有的模块组成一个modules对象传递进来， 键就是模块的路径，值就是模块内部的代码
  // 模块缓存对象， 已经解析过的路径都会放进来，可以判断当前需要解析的模块是否已经解析过
  var installedModules = {};

  // 定义一个 webpack 自己的的 require polyfill
  function __webpack_require__(moduleId) {

    // 检测 moduleId 是否已经存在缓存中了，若是已经存在则不需要在进行依赖解析
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 创建一个新的 module， 并将其push至缓存中，方便在后续递归遍历解析依赖时，检测是否已经解析过
    var module = installedModules[moduleId] = {
      i: moduleId, // moduleId 是自执行函数的参数 modules 对象的键，根本是模块的路径
      exports: {}
    };

    // 执行 modules[moduleId] 函数
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 将 exports 返回
    return module.exports;
  }

  //  将 webpack.config.js 配置中的 entry 作为 moduleId 进行传递
  return __webpack_require__("./src/index.js");
})
/*** 将项目中的几个模块作为自执行函数的参数传递 ***/
({
  // webpack.config.js 配置中 entry 的值，会将其作为递归解析依赖的入口
  "./src/index.js": (function (module, exports, __webpack_require__) {
    eval("const parent = __webpack_require__(/*! ./parent.js */ \"./src/parent.js\")\n\nconsole.log(parent)\n\n//# sourceURL=webpack:///./src/index.js?");
  }),
  "./src/parent.js": (function (module, exports, __webpack_require__) {
    eval("const child = __webpack_require__(/*! ./child.js */ \"./src/child.js\")\n\nmodule.exports = {\n  msg: '我是parent的信息',\n  child: child.msg\n}\n\n\n\n//# sourceURL=webpack:///./src/parent.js?");
  }),
  "./src/child.js": (function (module, exports) {
    eval("\nmodule.exports = {\n  msg: '我是child的信息'\n}\n\n//# sourceURL=webpack:///./src/child.js?");
  })
});