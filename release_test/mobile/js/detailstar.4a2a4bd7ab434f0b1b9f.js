!function(e){var n={};function _(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,_),t.l=!0,t.exports}_.m=e,_.c=n,_.d=function(e,n,r){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(_.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)_.d(r,t,function(n){return e[n]}.bind(null,t));return r},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_(_.s="./src/js/detailstar.js")}({"./src/base/util.js":
/*!**************************!*\
  !*** ./src/base/util.js ***!
  \**************************/
/*! no static exports found */function(module,exports){eval("window.util = {\n  $: function $(_id) {\n    return document.getElementById(_id)\n  },\n  createScript: function(_url) {\n    var script = document.createElement('script')\n    script.setAttribute('src', _url)\n    document.getElementsByTagName('head')[0].appendChild(script)\n  },\n  commonGaq: function(name) {\n    util.gaq(name)\n    this.$('sy').addEventListener('click', function() {\n      util.gaq(name + '_首页_clk')\n    })\n    this.$('dt').addEventListener('click', function() {\n      util.gaq(name + '_圈圈动态_clk')\n    })\n    /* this.$('qz').addEventListener('click', function () {\n            util.gaq(name + '_网易博客圈子_clk')\n        }) */\n    this.$('xy').addEventListener('click', function() {\n      util.gaq(name + '_用户协议_clk')\n    })\n    this.$('ys').addEventListener('click', function() {\n      util.gaq(name + '_隐私政策_clk')\n    })\n  },\n  /**\n   * 统计方法\n   */\n  gaq: function(eventName, eventLabel) {\n    DATracker &&\n      DATracker.track(eventName, {\n        label: eventLabel\n      })\n  },\n  /**\n   * 获取url链接带的参数\n   * @param  {string} name 参数名\n   */\n  getQueryString: function(name) {\n    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')\n    var r = window.location.search.substr(1).match(reg)\n    if (r != null) return r[2]\n    return null\n  }\n}\n\n\n//# sourceURL=webpack:///./src/base/util.js?")},"./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/common.css?")},"./src/css/detailstar.css":
/*!********************************!*\
  !*** ./src/css/detailstar.css ***!
  \********************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/detailstar.css?")},"./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/reset.css?")},"./src/js/detailstar.js":
/*!******************************!*\
  !*** ./src/js/detailstar.js ***!
  \******************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/common.css */ "./src/css/common.css");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_detailstar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/detailstar.css */ "./src/css/detailstar.css");\n/* harmony import */ var _css_detailstar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_detailstar_css__WEBPACK_IMPORTED_MODULE_2__);\n__webpack_require__(/*! ../base/util.js */ "./src/base/util.js")\n\n\n\n\n\nwindow.onload = function () {\n    util.commonGaq(\'网易圈圈_星钻详情_mobile官网\')\n\n};\n\n//# sourceURL=webpack:///./src/js/detailstar.js?')}});