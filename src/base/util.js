window.util = {
  $: function $(_id) {
    return document.getElementById(_id)
  },
  commonGaq: function(name) {
    util.gaq(name)
    this.$('sy').addEventListener('click', function() {
      util.gaq(name + '_首页_clk')
    })
    this.$('dt').addEventListener('click', function() {
      util.gaq(name + '_圈圈动态_clk')
    })
    this.$('pt').addEventListener('click', function() {
      util.gaq(name + '_圈圈号公众平台_clk')
    })
    this.$('bottom').addEventListener('click', function() {
      util.gaq(name + '_联系我们_clk')
      /* document.documentElement.scrollTop = 55555
            document.body.scrollTop = 55555 */
    })
    /* this.$('qz').addEventListener('click', function () {
            util.gaq(name + '_网易博客圈子_clk')
        }) */
    this.$('xy').addEventListener('click', function() {
      util.gaq(name + '_用户协议_clk')
    })
    this.$('ys').addEventListener('click', function() {
      util.gaq(name + '_隐私政策_clk')
    })
  },
  /**
   * 统计方法
   */
  gaq: function(eventName, eventLabel) {
    DATracker &&
      DATracker.track(eventName, {
        label: eventLabel
      })
  },
  /**
   * 获取url链接带的参数
   * @param  {string} name 参数名
   */
  getQueryString: function(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return r[2]
    return null
  }
}
