# 圈圈官网多页面

## 页面读取 src/js/目录下的每个 js 文件对应一个 src/的同名页面

## 使用 postcss 配置在 postcss.config.js

## 环境配置变量 src/config 下 不同的打包环境会读取对应文件并输出到 static/env.js

- 本地开发：yarn start
- 测试环境：yarn build-test
- 线上 appstore 版本：yarn build-appstore （打包完会自动执行脚本拷贝代码到 release_test 目录下）
- 线上版本：yarn build-release
