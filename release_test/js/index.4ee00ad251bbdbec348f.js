!function(n){var e={};function _(c){if(e[c])return e[c].exports;var t=e[c]={i:c,l:!1,exports:{}};return n[c].call(t.exports,t,t.exports,_),t.l=!0,t.exports}_.m=n,_.c=e,_.d=function(n,e,c){_.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},_.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},_.t=function(n,e){if(1&e&&(n=_(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(_.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)_.d(c,t,function(e){return n[e]}.bind(null,t));return c},_.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return _.d(e,"a",e),e},_.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},_.p="",_(_.s="./src/js/index.js")}({"./src/base/util.js":
/*!**************************!*\
  !*** ./src/base/util.js ***!
  \**************************/
/*! no static exports found */function(module,exports){eval("window.util = {\n  $: function $(_id) {\n    return document.getElementById(_id)\n  },\n  commonGaq: function(name) {\n    util.gaq(name)\n    this.$('sy').addEventListener('click', function() {\n      util.gaq(name + '_首页_clk')\n    })\n    this.$('dt').addEventListener('click', function() {\n      util.gaq(name + '_圈圈动态_clk')\n    })\n    this.$('pt').addEventListener('click', function() {\n      util.gaq(name + '_圈圈号公众平台_clk')\n    })\n    this.$('bottom').addEventListener('click', function() {\n      util.gaq(name + '_联系我们_clk')\n      /* document.documentElement.scrollTop = 55555\n            document.body.scrollTop = 55555 */\n    })\n    /* this.$('qz').addEventListener('click', function () {\n            util.gaq(name + '_网易博客圈子_clk')\n        }) */\n    this.$('xy').addEventListener('click', function() {\n      util.gaq(name + '_用户协议_clk')\n    })\n    this.$('ys').addEventListener('click', function() {\n      util.gaq(name + '_隐私政策_clk')\n    })\n  },\n  /**\n   * 统计方法\n   */\n  gaq: function(eventName, eventLabel) {\n    DATracker &&\n      DATracker.track(eventName, {\n        label: eventLabel\n      })\n  },\n  /**\n   * 获取url链接带的参数\n   * @param  {string} name 参数名\n   */\n  getQueryString: function(name) {\n    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')\n    var r = window.location.search.substr(1).match(reg)\n    if (r != null) return r[2]\n    return null\n  }\n}\n\n\n//# sourceURL=webpack:///./src/base/util.js?")},"./src/css/animate.css":
/*!*****************************!*\
  !*** ./src/css/animate.css ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/animate.css?")},"./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/common.css?")},"./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?")},"./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/reset.css?")},"./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/common.css */ \"./src/css/common.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/animate.css */ \"./src/css/animate.css\");\n/* harmony import */ var _css_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);\n__webpack_require__(/*! ../base/util.js */ \"./src/base/util.js\")\n\n\n\n\n\nfunction scrollView(isInit) {\n  var heightTop = document.documentElement.scrollTop || document.body.scrollTop\n  var head = util.$('head')\n  if (heightTop > 0) {\n    if (head.className.indexOf('fadeOut') !== -1) {\n      //head.className = 'head-move'\n      if (isInit) {\n        head.className = 'head-move fadeIn'\n      } else {\n        head.className = 'head-move animated fadeIn'\n      }\n    }\n  } else {\n    // head.className = 'head-move'\n    if (!isInit) {\n      head.className = 'head-move animated fadeOut'\n    } else {\n      // ie下第一次进入页面 不会隐藏 强制触发layout\n      setTimeout(function() {\n        head.className = 'head-move fadeOut opacity0'\n      }, 0)\n    }\n  }\n}\nscrollView(true)\nwindow.onload = function() {\n  util.commonGaq('网易圈圈_pc官网')\n  // 埋点来源\n  var from = util.getQueryString('fromwhere')\n  if (from) {\n    util.gaq(from)\n  }\n  document.addEventListener('scroll', function(e) {\n    scrollView()\n  })\n  util.$('sy1').addEventListener('click', function() {\n    document.documentElement.scrollTop = 0\n    util.gaq('网易圈圈_pc官网_首页_clk')\n  })\n  util.$('dt1').addEventListener('click', function() {\n    util.gaq('网易圈圈_pc官网_圈圈动态_clk')\n  })\n  util.$('pt1').addEventListener('click', function() {\n    util.gaq('网易圈圈_pc官网_圈圈号公众平台_clk')\n  })\n  util.$('bottom1').addEventListener('click', function() {\n    util.gaq('网易圈圈_pc官网_联系我们_clk')\n    document.documentElement.scrollTop = 9999\n    document.body.scrollTop = 9999\n  })\n  util.$('aos0') &&\n    util.$('aos0').addEventListener('click', function() {\n      util.gaq('网易圈圈_pc官网_首屏安卓下载_clk')\n    })\n  util.$('aos1') &&\n    util.$('aos1').addEventListener('click', function() {\n      util.gaq('网易圈圈_pc官网_第五屏安卓下载_clk')\n    })\n  util.$('ios0') &&\n    util.$('ios0').addEventListener('click', function() {\n      util.gaq('网易圈圈_pc官网_首屏ios下载_clk')\n    })\n  util.$('ios1') &&\n    util.$('ios1').addEventListener('click', function() {\n      util.gaq('网易圈圈_pc官网_第五屏ios下载_clk')\n    })\n}\n\n\n//# sourceURL=webpack:///./src/js/index.js?")}});