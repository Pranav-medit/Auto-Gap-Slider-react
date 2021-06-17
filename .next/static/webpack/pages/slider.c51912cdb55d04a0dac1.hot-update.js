self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/slickSlider.js":
/*!***********************************!*\
  !*** ./components/slickSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_prana_Documents_VSCode_React_react_hooks_hook1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(_c = _s(function (_ref, childRef) {
  _s();

  var styleImg = _ref.styleImg;
  var imgArr = [{
    'src': 'static/s1.jpg',
    id: 1
  }, {
    'src': 'static/s2.jpg',
    id: 2
  }, {
    'src': 'static/s3.jpg',
    id: 3
  }, {
    'src': 'static/s4.jpg',
    id: 4
  }, {
    'src': 'static/s5.jpg',
    id: 5
  }, {
    'src': 'static/s6.jpg',
    id: 6
  }, {
    'src': 'static/s7.jpg',
    id: 7
  }, {
    'src': 'static/s8.jpg',
    id: 8
  }, {
    'src': 'static/s9.jpg',
    id: 9
  }, {
    'src': 'static/s10.jpg',
    id: 10
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(imgArr),
      imgState = _useState[0],
      imgArrUpdt = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var id = 11;
    setTimeout(function () {
      id = id + 2;
      imgArrUpdt([].concat((0,C_Users_prana_Documents_VSCode_React_react_hooks_hook1_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(imgState), [{
        'src': 'static/per1.jpg',
        id: id
      }, {
        'src': 'static/per2.jpg',
        id: id + 1
      }]));
      console.log(id);
    }, 10000);
  }, []);
  console.log('jow'); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {
            width: 'inherit',
            objectFit: 'cover',
            height: '100%'
          },
          src: src.src,
          className: 'imageHolder',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "TLdesTkvEVpH+2amsN47teVspjY="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var styleImg = {
    width: '200px',
    height: '200px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1];

  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var eachSlideWidth = divRef.current.offsetWidth;
  var pxToScrlRight = -eachSlideWidth;
  var pxToScrlLeft = eachSlideWidth;

  var clickHandler = function clickHandler(direction) {
    var left = divRef.current.getBoundingClientRect().left;

    if (direction === 'next') {
      console.log(pxToScrlRight);

      if (divRef.current.offsetWidth - window.innerWidth < -pxToScrlRight) {
        divRef.current.style.cssText = "transform: translateX(".concat(-divRef.current.offsetWidth + window.innerWidth, "px)");
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlRight, "px)");
        divRef.current.scrollLeft = eachSlideWidth;
        pxToScrlLeft = pxToScrlLeft - eachSlideWidth;
        pxToScrlRight = pxToScrlRight - eachSlideWidth;
      }
    } else if (direction === 'prev') {
      var _left = divRef.current.getBoundingClientRect().left;
      console.log(_left, pxToScrlLeft, pxToScrlRight);
      console.log('lft btn', _left);

      if (_left > -eachSlideWidth) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        pxToScrlRight = -eachSlideWidth;
        pxToScrlLeft = eachSlideWidth;
      } else {
        console.log('Leftinent', _left);
        console.log("probelakfja");
        divRef.current.style.cssText = "transform: translateX(".concat(pxToScrlLeft, "px)");
        pxToScrlRight = pxToScrlRight + eachSlideWidth;
        pxToScrlLeft = pxToScrlLeft + eachSlideWidth;
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    document.getElementsByClassName('button');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('prev');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('next');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "LbEgPodzyzMs6AQ90AvsS21ASDA=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider);

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "SlickSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImR1bW15IiwiZHUiLCJ1c2VSZWYiLCJkaXZSZWYiLCJlYWNoU2xpZGVXaWR0aCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInB4VG9TY3JsUmlnaHQiLCJweFRvU2NybExlZnQiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlIiwiY3NzVGV4dCIsInNjcm9sbExlZnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLGdCQUFHQyxpREFBVSxTQUFDLGdCQUFZQyxRQUFaLEVBQXdCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUMzQyxNQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUNJLFdBQU0sZUFEVjtBQUVJQyxNQUFFLEVBQUM7QUFGUCxHQURXLEVBS1g7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FMVyxFQVNYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBVFcsRUFhWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQWJXLEVBaUJYO0FBQ0ksV0FBTSxlQURWO0FB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RUEsYUFBYSxHQUFFSCxjQUE5QjtBQUNBSSxvQkFBWSxHQUFHQSxZQUFZLEdBQUNKLGNBQTVCO0FBQ0g7QUFFSjtBQUNKLEdBOUJEOztBQStCQWhCLGtEQUFTLENBQUMsWUFBSTtBQUNWOEIsWUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxRQUFoQztBQUVILEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQSxzQkFDSTtBQUFNLGFBQVMsRUFBRXhCLHdFQUFqQjtBQUFBLDRCQUNJO0FBQUcsYUFBTyxFQUFFO0FBQUEsZUFBSWMsWUFBWSxDQUFDLE1BQUQsQ0FBaEI7QUFBQSxPQUFaO0FBQXNDLGVBQVMsRUFBRWQsd0VBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLFNBQUcsRUFBRVEsTUFBVjtBQUFrQixlQUFTLEVBQUVSLHVFQUFBLEdBQWMsV0FBM0M7QUFBQSw2QkFDQSw4REFBQyxHQUFEO0FBQUssV0FBRyxFQUFFZCxRQUFWO0FBQW9CLGdCQUFRLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLRztBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQUkyQixZQUFZLENBQUMsTUFBRCxDQUFoQjtBQUFBLE9BQVo7QUFBc0MsZUFBUyxFQUFFZCx3RUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBdkREOztJQUFNSSxXOztNQUFBQSxXO0FBeUROLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5jNTE5MTJjZGI1NWQwNGEwZGFjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nfSxjaGlsZFJlZikgPT57XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nU3RhdGUsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnIpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGlkPWlkKzI7XHJcbiAgICAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDppZCsxLFxyXG4gICAgICAgIH1dKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgfSwxMDAwMClcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc29sZS5sb2coJ2pvdycpXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIHN0eWxlPXt7d2lkdGg6J2luaGVyaXQnLG9iamVjdEZpdDonY292ZXInLGhlaWdodDonMTAwJSd9fSBzcmM9e3NyYy5zcmN9ICBrZXk9e3NyYy5pZH0gY2xhc3NOYW1lPXsnaW1hZ2VIb2xkZXInfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0pXHJcbmNvbnN0IFNsaWNrU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzIwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGNoaWxkUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBkaXZSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGVhY2hTbGlkZVdpZHRoID0gZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgcHhUb1NjcmxSaWdodCA9IC1lYWNoU2xpZGVXaWR0aDsgXHJcbiAgICBsZXQgcHhUb1NjcmxMZWZ0ID0gZWFjaFNsaWRlV2lkdGg7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHB4VG9TY3JsUmlnaHQpXHJcbiAgICAgICAgICAgIGlmIChkaXZSZWYuY3VycmVudC5vZmZzZXRXaWR0aC13aW5kb3cuaW5uZXJXaWR0aDwgLXB4VG9TY3JsUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK3dpbmRvdy5pbm5lcldpZHRofXB4KWBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3B4VG9TY3JsUmlnaHR9cHgpYFxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IGVhY2hTbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gcHhUb1NjcmxMZWZ0LWVhY2hTbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxSaWdodCA9IHB4VG9TY3JsUmlnaHQtZWFjaFNsaWRlV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdCxweFRvU2NybExlZnQscHhUb1NjcmxSaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZnQgYnRuJyxsZWZ0KTtcclxuICAgICAgICAgICAgaWYobGVmdD4gLWVhY2hTbGlkZVdpZHRoKXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPSAtZWFjaFNsaWRlV2lkdGg7IFxyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gZWFjaFNsaWRlV2lkdGg7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnRpbmVudCcsbGVmdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2JlbGFrZmphXCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtweFRvU2NybExlZnR9cHgpYDtcclxuICAgICAgICAgICAgICAgIHB4VG9TY3JsUmlnaHQgPXB4VG9TY3JsUmlnaHQgK2VhY2hTbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgcHhUb1NjcmxMZWZ0ID0gcHhUb1NjcmxMZWZ0K2VhY2hTbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbicpXHJcbiAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpPT5jbGlja0hhbmRsZXIoJ3ByZXYnKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5QcmV2PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2UmVmfSBjbGFzc05hbWU9e3N0eWxlcy5zbGljaysgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRSZWZ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgb25DbGljaz17KCk9PmNsaWNrSGFuZGxlcignbmV4dCcpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==