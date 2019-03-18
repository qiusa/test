module.exports = {
  plugins: {
    'postcss-cssnext': {},
    "postcss-pxtorem": {
      rootValue: 37.5, //根大小750
      propList: [], // 属性的选择器，* 表示通用
      selectorBlackList: [] // 忽略的选择器.ig - 表示.ig - 开头的都不会转换
    }
  }
}