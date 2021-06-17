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
  }); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img),
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
          lineNumber: 71,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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

  var rightScrl = -210;
  var leftScrl = 210;
  var childRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var slide = document.getElementsByClassName('imgComp')[0];
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
      lineNumber: 125,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('next');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImR1bW15IiwiZHUiLCJyaWdodFNjcmwiLCJsZWZ0U2NybCIsInVzZVJlZiIsImRpdlJlZiIsImNsaWNrSGFuZGxlciIsImRpcmVjdGlvbiIsImxlZnQiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3R5bGUiLCJjc3NUZXh0Iiwic2Nyb2xsTGVmdCIsInNsaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsUUFBWixFQUF3QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDM0MsTUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSSxXQUFNLGVBRFY7QUFFSUMsTUFBRSxFQUFDO0FBRlAsR0FEVyxFQUtYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBTFcsRUFTWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQVRXLEVBYVg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FiVyxFQWlCWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFG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SyxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQWQ7QUFFSCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBSUEsc0JBQ0k7QUFBTSxhQUFTLEVBQUV4Qix3RUFBakI7QUFBQSw0QkFDSTtBQUFHLGFBQU8sRUFBRTtBQUFBLGVBQUlXLFlBQVksQ0FBQyxNQUFELENBQWhCO0FBQUEsT0FBWjtBQUFzQyxlQUFTLEVBQUVYLHdFQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxTQUFHLEVBQUVVLE1BQVY7QUFBa0IsZUFBUyxFQUFFVix1RUFBQSxHQUFjLFdBQTNDO0FBQUEsNkJBQ0EsOERBQUMsR0FBRDtBQUFLLFdBQUcsRUFBRWQsUUFBVjtBQUFvQixnQkFBUSxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBS0c7QUFBRyxhQUFPLEVBQUU7QUFBQSxlQUFJd0IsWUFBWSxDQUFDLE1BQUQsQ0FBaEI7QUFBQSxPQUFaO0FBQXNDLGVBQVMsRUFBRVgsd0VBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXRERDs7SUFBTUksVzs7TUFBQUEsVztBQXdETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuNDAzYmI3OWJhYzhlYmQ5ZGZmMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpY2tTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZ30sY2hpbGRSZWYpID0+e1xyXG4gICAgY29uc3QgaW1nQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ1N0YXRlLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBpZD1pZCsyO1xyXG4gICAgICAgIGltZ0FyclVwZHQoWy4uLmltZ1N0YXRlLCAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgaWQ6aWQrMSxcclxuICAgICAgICB9XSlcclxuICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBcclxuICAgIH0sMTAwMDApXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdTdGF0ZS5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMjAwcHgnXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgbGV0IHJpZ2h0U2NybCA9IC0yMTA7IFxyXG4gICAgbGV0IGxlZnRTY3JsID0gMjEwO1xyXG4gICAgY29uc3QgY2hpbGRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGRpdlJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGRpdlJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXZSZWYuY3VycmVudC5vZmZzZXRXaWR0aCxyaWdodFNjcmwpXHJcbiAgICAgICAgICAgIGlmIChkaXZSZWYuY3VycmVudC5vZmZzZXRXaWR0aC13aW5kb3cuaW5uZXJXaWR0aDwgLXJpZ2h0U2NybCkge1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrd2luZG93LmlubmVyV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cmlnaHRTY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSAyMTBcclxuICAgICAgICAgICAgICAgIGxlZnRTY3JsID0gbGVmdFNjcmwtMjEwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRTY3JsID0gcmlnaHRTY3JsLTIxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlZnQsbGVmdFNjcmwscmlnaHRTY3JsKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGZ0IGJ0bicsbGVmdClcclxuICAgICAgICAgICAgaWYobGVmdD4gLTIxMCl7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWBcclxuICAgICAgICAgICAgICAgIHJpZ2h0U2NybCA9IC0yMTA7IFxyXG4gICAgICAgICAgICAgICAgbGVmdFNjcmwgPSAyMTA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnRpbmVudCcsbGVmdClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvYmVsYWtmamFcIilcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bGVmdFNjcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTY3JsID1yaWdodFNjcmwgKzIxMFxyXG4gICAgICAgICAgICAgICAgbGVmdFNjcmwgPSBsZWZ0U2NybCsyMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdDb21wJylbMF1cclxuICAgIFxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuQ3NsaWNrfT5cclxuICAgICAgICAgICAgPGkgb25DbGljaz17KCk9PmNsaWNrSGFuZGxlcigncHJldicpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlByZXY8L2k+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFJlZn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSBvbkNsaWNrPXsoKT0+Y2xpY2tIYW5kbGVyKCduZXh0Jyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja1NsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9