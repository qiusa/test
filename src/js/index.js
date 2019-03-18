require('../base/util.js')
import '../css/reset.css'
import '../css/common.css'
import '../css/animate.css'
import '../css/main.css'

function scrollView(isInit) {
  var heightTop = document.documentElement.scrollTop || document.body.scrollTop
  var head = util.$('head')
  if (heightTop > 0) {
    if (head.className.indexOf('fadeOut') !== -1) {
      //head.className = 'head-move'
      if (isInit) {
        head.className = 'head-move fadeIn'
      } else {
        head.className = 'head-move animated fadeIn'
      }
    }
  } else {
    // head.className = 'head-move'
    if (!isInit) {
      head.className = 'head-move animated fadeOut'
    } else {
      // ie下第一次进入页面 不会隐藏 强制触发layout
      setTimeout(function() {
        head.className = 'head-move fadeOut opacity0'
      }, 0)
    }
  }
}
scrollView(true)
window.onload = function() {
  if (CONFIGS.appstore) {
    document.body.className = CONFIGS.appstore
  }
  util.commonGaq('网易圈圈_pc官网')
  // 埋点来源
  var from = util.getQueryString('fromwhere')
  if (from) {
    util.gaq(from)
  }
  document.addEventListener('scroll', function(e) {
    scrollView()
  })
  util.$('detailStarMore').addEventListener('click', function() {
    util.gaq('网易圈圈_pc官网_首页-星钻详情-点击')
  })
  util.$('sy1').addEventListener('click', function() {
    document.documentElement.scrollTop = 0
    util.gaq('网易圈圈_pc官网_首页_clk')
  })
  util.$('dt1').addEventListener('click', function() {
    util.gaq('网易圈圈_pc官网_圈圈动态_clk')
  })
  util.$('pt1').addEventListener('click', function() {
    util.gaq('网易圈圈_pc官网_圈圈号公众平台_clk')
  })
  util.$('bottom1').addEventListener('click', function() {
    util.gaq('网易圈圈_pc官网_联系我们_clk')
    document.documentElement.scrollTop = 9999
    document.body.scrollTop = 9999
  })
  util.$('aos0') &&
    util.$('aos0').addEventListener('click', function() {
      util.gaq('网易圈圈_pc官网_首屏安卓下载_clk')
    })
  util.$('aos1') &&
    util.$('aos1').addEventListener('click', function() {
      util.gaq('网易圈圈_pc官网_第五屏安卓下载_clk')
    })
  util.$('ios0') &&
    util.$('ios0').addEventListener('click', function() {
      util.gaq('网易圈圈_pc官网_首屏ios下载_clk')
    })
  util.$('ios1') &&
    util.$('ios1').addEventListener('click', function() {
      util.gaq('网易圈圈_pc官网_第五屏ios下载_clk')
    })
}
