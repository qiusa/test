/**
 * 复制打包后的文件到指定的目录
 *
 */
const fs = require('fs-extra')

const src = './appstore' // 要复制的目录
const dist = './release_test' // 复制到目标目录
// 不清空源目录 直接覆盖
fs.copy(src, dist)
  .then(() => console.log('成功复制' + src + '目录到' + dist))
  .catch(err => console.error(err))
