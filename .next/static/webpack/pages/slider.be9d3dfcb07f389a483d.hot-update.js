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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childRef) {
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArr),
      imgState = _useState[0],
      imgArrUpdt = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Img),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
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
          lineNumber: 57,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1];

  var rightScrl = -210;
  var leftScrl = 210;
  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var clickHandler = function clickHandler(direction) {
    var left = divRef.current.getBoundingClientRect().left;

    if (direction === 'next') {
      console.log(divRef.current.offsetWidth, rightScrl);

      if (divRef.current.offsetWidth - window.innerWidth < -rightScrl) {
        divRef.current.style.cssText = "transform: translateX(".concat(-divRef.current.offsetWidth + window.innerWidth, "px)");
      } else {
        divRef.current.style.cssText = "transform: translateX(".concat(rightScrl, "px)");
        divRef.current.scrollLeft = 210;
        leftScrl = leftScrl - 210;
        rightScrl = rightScrl - 210;
      }
    } else if (direction === 'prev') {
      var _left = divRef.current.getBoundingClientRect().left;
      console.log(_left, leftScrl, rightScrl);
      console.log('lft btn', _left);

      if (_left > -210) {
        divRef.current.style.cssText = "transform: translateX(-".concat(0, "px)");
        rightScrl = -210;
        leftScrl = 210;
      } else {
        console.log('Leftinent', _left);
        console.log("probelakfja");
        divRef.current.style.cssText = "transform: translateX(".concat(leftScrl, "px)");
        rightScrl = rightScrl + 210;
        leftScrl = leftScrl + 210;
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var slide = document.getElementsByClassName('imgComp')[0];
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('prev');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('next');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJzcmMiLCJpbmRleCIsInN0eWxlcyIsIndpZHRoIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiU2xpY2tTbGlkZXIiLCJkdW1teSIsImR1IiwicmlnaHRTY3JsIiwibGVmdFNjcmwiLCJ1c2VSZWYiLCJkaXZSZWYiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZWZ0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzdHlsZSIsImNzc1RleHQiLCJzY3JvbGxMZWZ0Iiwic2xpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsUUFBWixFQUF3QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDM0MsTUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSSxXQUFNLGVBRFY7QUFFSUMsTUFBRSxFQUFDO0FBRlAsR0FEVyxFQUtYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBTFcsRUFTWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQVRXLEVBYVg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FiVyxFQWlCWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQWpCVyxFQW9CVDtB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QUFBQSw2QkFDQSw4REFBQyxHQUFEO0FBQUssV0FBRyxFQUFFWCxRQUFWO0FBQW9CLGdCQUFRLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLRztBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQUlxQixZQUFZLENBQUMsTUFBRCxDQUFoQjtBQUFBLE9BQVo7QUFBc0MsZUFBUyxFQUFFWCx3RUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBdEREOztJQUFNSSxXOztNQUFBQSxXO0FBd0ROLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5iZTlkM2RmY2IwN2YzODlhNDgzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nfSxjaGlsZFJlZikgPT57XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nU3RhdGUsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnIpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBsZXQgaW1hZ2VTbGlkZSA9IHVzZVJlZihudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ltZ1N0YXRlLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAga2V5PXtzcmMuaWR9IGNsYXNzTmFtZT17J2ltYWdlSG9sZGVyJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OicyMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBsZXQgcmlnaHRTY3JsID0gLTIxMDsgXHJcbiAgICBsZXQgbGVmdFNjcmwgPSAyMTA7XHJcbiAgICBjb25zdCBjaGlsZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLHJpZ2h0U2NybClcclxuICAgICAgICAgICAgaWYgKGRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoLXdpbmRvdy5pbm5lcldpZHRoPCAtcmlnaHRTY3JsKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZSZWYuY3VycmVudC5vZmZzZXRXaWR0aCt3aW5kb3cuaW5uZXJXaWR0aH1weClgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtyaWdodFNjcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IDIxMFxyXG4gICAgICAgICAgICAgICAgbGVmdFNjcmwgPSBsZWZ0U2NybC0yMTA7XHJcbiAgICAgICAgICAgICAgICByaWdodFNjcmwgPSByaWdodFNjcmwtMjEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGRpdlJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdCxsZWZ0U2NybCxyaWdodFNjcmwpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZnQgYnRuJyxsZWZ0KVxyXG4gICAgICAgICAgICBpZihsZWZ0PiAtMjEwKXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTY3JsID0gLTIxMDsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0U2NybCA9IDIxMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTGVmdGluZW50JyxsZWZ0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9iZWxha2ZqYVwiKVxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtsZWZ0U2NybH1weClgXHJcbiAgICAgICAgICAgICAgICByaWdodFNjcmwgPXJpZ2h0U2NybCArMjEwXHJcbiAgICAgICAgICAgICAgICBsZWZ0U2NybCA9IGxlZnRTY3JsKzIxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ0NvbXAnKVswXVxyXG4gICAgXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2t9PlxyXG4gICAgICAgICAgICA8aSBvbkNsaWNrPXsoKT0+Y2xpY2tIYW5kbGVyKCdwcmV2Jyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+UHJldjwvaT5cclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdlJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkUmVmfSBzdHlsZUltZz17c3R5bGVJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpIG9uQ2xpY2s9eygpPT5jbGlja0hhbmRsZXIoJ25leHQnKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=