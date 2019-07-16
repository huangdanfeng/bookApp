require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50f8889d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_50f8889d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50f8889d", Component.options)
  } else {
    hotAPI.reload("data-v-50f8889d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_request__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_index__ = __webpack_require__(121);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_2__components_card__["a" /* default */]
  },

  data: function data() {
    return {
      src: '../../static/images/user.png',
      name: '点击登录',
      warnSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    };
  },
  created: function created() {
    var user = wx.getStorageSync('userInfo');
    // 如果登录过，直接去本地存储的头像
    if (user.openId) {
      this.src = user.avatarUrl;
      this.name = user.nickName;
    }
  },

  methods: {
    scanHandle: function scanHandle() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var user, res, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = wx.getStorageSync('userInfo');
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5_utils_request__["b" /* scan */])();

              case 3:
                res = _context.sent;
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_5_utils_request__["a" /* request */])('/demo', 'get', {
                  isbn: res.result,
                  method: 'GET',
                  openId: user.openId
                });

              case 6:
                _ref = _context.sent;
                data = _ref.data;

                if (data && data.code === 0) {
                  Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["c" /* showModal */])('成功', '图书已添加');
                } else {
                  Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["c" /* showModal */])('失败', '图书已存在');
                }
                Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["a" /* hideLoading */])();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    login: function login(res) {
      var _this2 = this;

      var user = wx.getStorageSync('userInfo');
      if (!user.openId && res.target.userInfo) {
        Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["b" /* showLoading */])('加载中');

        // 设置登录地址
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_4__pages_config__["b" /* loginUrl */]);
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.login({
          success: function success(userInfo) {
            wx.setStorageSync('userInfo', userInfo);
            Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["d" /* showToast */])('登录成功', 'success');
            Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["a" /* hideLoading */])();
            _this2.src = userInfo.avatarUrl;
            _this2.name = userInfo.nickName;
          },
          fail: function fail(err) {
            wx.removeStorageSync('userInfo');
            Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["a" /* hideLoading */])();
            Object(__WEBPACK_IMPORTED_MODULE_6_utils_index__["d" /* showToast */])('登录失败，请重新登录', 'none');
            console.log(err);
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fb80d35_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fb80d35"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1fb80d35_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fb80d35", Component.options)
  } else {
    hotAPI.reload("data-v-1fb80d35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      size: 14
    };
  },

  computed: {
    time: function time() {
      var d = new Date();
      return this.getCard(d.getMonth());
    },
    percent: function percent() {
      // 计算今年已经过了的天数的百分比
      var d = new Date();
      var sum = this.getCard(0);
      var today = this.getCard(d.getMonth());
      return ((1 - today / sum) * 100).toFixed(1);
    }
  },
  methods: {
    getCard: function getCard(type) {
      var d = new Date();
      var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      // 计算今年还剩几个月
      var sum = data.reduce(function (total, cur, index) {
        if (cur >= type + 1) {
          return total + new Date(d.getFullYear(), cur, 0).getDate();
        }
        return total;
      }, 0);
      // 计算当前月剩的天数
      if (type >= 1) {
        return sum - d.getDate();
      }
      return sum;
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.percent,
      "show-info": "",
      "font-size": _vm.size,
      "active": "true",
      "stroke-width": "8"
    }
  }), _vm._v(" "), _c('div', [_vm._v("今年还剩"), _c('span', {
    staticClass: "time"
  }, [_vm._v(" " + _vm._s(_vm.time) + " ")]), _vm._v("天，出走半生，愿你归来仍是少年！！！")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fb80d35", esExports)
  }
}

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = request;
/* harmony export (immutable) */ __webpack_exports__["b"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_config__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_index__ = __webpack_require__(121);




function request(url, method, data) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      url: __WEBPACK_IMPORTED_MODULE_1__pages_config__["a" /* host */] + url, // 仅为示例，并非真实的接口地址
      data: data,
      method: method,
      header: {
        'content-type': 'json' // 默认值
      },
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(error) {
        Object(__WEBPACK_IMPORTED_MODULE_2_utils_index__["c" /* showModal */])('加载失败', '数据错误');
        reject(error);
      }
    });
  });
}
function scan() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.scanCode({
      onlyFromCamera: type,
      success: function success(res) {
        Object(__WEBPACK_IMPORTED_MODULE_2_utils_index__["b" /* showLoading */])('加载中');
        resolve(res);
      },
      fail: function fail(error) {
        reject(error);
      }
    });
  });
}

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('button', {
    staticClass: "user",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.login
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.src,
      "alt": "图片加载失败"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.name))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('card', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), (_vm.src != '../../static/images/user.png') ? _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "type": "warn",
      "size": _vm.warnSize,
      "loading": _vm.loading,
      "plain": _vm.plain,
      "disabled": _vm.disabled,
      "eventid": '1'
    },
    on: {
      "click": _vm.scanHandle
    }
  }, [_vm._v("添加图书")])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-50f8889d", esExports)
  }
}

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* harmony export (immutable) */ __webpack_exports__["c"] = showModal;
/* harmony export (immutable) */ __webpack_exports__["d"] = showToast;
/* harmony export (immutable) */ __webpack_exports__["b"] = showLoading;
/* harmony export (immutable) */ __webpack_exports__["a"] = hideLoading;
function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return t1 + ' ' + t2;
}

function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  });
}

function showToast(title, icon) {
  wx.showToast({
    title: title,
    icon: icon,
    duration: 2000
  });
}
function showLoading(title) {
  wx.showLoading({
    title: title
  });
}
function hideLoading() {
  wx.hideLoading();
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  formatNumber: formatNumber,
  formatTime: formatTime,
  showModal: showModal,
  showToast: showToast,
  showLoading: showLoading,
  hideLoading: hideLoading
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginUrl; });
/* unused harmony export userUrl */
var host = 'https://w59sddye.qcloud.la/weapp';
var loginUrl = host + '/login';
var userUrl = host + '/user';


/***/ })

},[100]);