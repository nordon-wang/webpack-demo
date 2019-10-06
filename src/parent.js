const child = require('./child.js')

module.exports = {
  msg: '我是parent的信息',
  child: child.msg
}

