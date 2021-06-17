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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(); // let id = 11;
  // setTimeout(()=>{
  //     id=id+2;
  //     imgArrUpdt([...imgState,   {
  //         'src':'static/per1.jpg',
  //         id:id,
  //     },
  //     {
  //         'src':'static/per2.jpg',
  //         id:id+1,
  //     }])
  //     console.log(id)
  // },10000)
  // let imageSlide = useRef(null);

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
          lineNumber: 68,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
      lineNumber: 122,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divRef,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick() {
        return clickHandler('next');
      },
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImlkIiwidXNlU3RhdGUiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJzcmMiLCJpbmRleCIsInN0eWxlcyIsIndpZHRoIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwiU2xpY2tTbGlkZXIiLCJkdW1teSIsImR1IiwicmlnaHRTY3JsIiwibGVmdFNjcmwiLCJ1c2VSZWYiLCJkaXZSZWYiLCJjbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZWZ0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzdHlsZSIsImNzc1RleHQiLCJzY3JvbGxMZWZ0Iiwic2xpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsUUFBWixFQUF3QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDM0MsTUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSSxXQUFNLGVBRFY7QUFFSUMsTUFBRSxFQUFDO0FBRlAsR0FEVyxFQUtYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBTFcsRUFTWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQVRXLEVBYVg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FiVyxFQWlCWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQWpCVyxFQW9CVDtB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LE1BQVY7QUFBa0IsZUFBUyxFQUFFVix1RUFBQSxHQUFjLFdBQTNDO0FBQUEsNkJBQ0EsOERBQUMsR0FBRDtBQUFLLFdBQUcsRUFBRVgsUUFBVjtBQUFvQixnQkFBUSxFQUFFQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBS0c7QUFBRyxhQUFPLEVBQUU7QUFBQSxlQUFJcUIsWUFBWSxDQUFDLE1BQUQsQ0FBaEI7QUFBQSxPQUFaO0FBQXNDLGVBQVMsRUFBRVgsd0VBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXRERDs7SUFBTUksVzs7TUFBQUEsVztBQXdETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuOTk0OTZiYjBmMGMyNTMyMzY3YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpY2tTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZ30sY2hpbGRSZWYpID0+e1xyXG4gICAgY29uc3QgaW1nQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ1N0YXRlLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyKVxyXG4gICAgdXNlRWZmZWN0KClcclxuICAgIC8vIGxldCBpZCA9IDExO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nU3RhdGUubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6J2luaGVyaXQnLG9iamVjdEZpdDonY292ZXInLGhlaWdodDonMTAwJSd9fSBzcmM9e3NyYy5zcmN9ICBrZXk9e3NyYy5pZH0gY2xhc3NOYW1lPXsnaW1hZ2VIb2xkZXInfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0pXHJcbmNvbnN0IFNsaWNrU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzIwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIGxldCByaWdodFNjcmwgPSAtMjEwOyBcclxuICAgIGxldCBsZWZ0U2NybCA9IDIxMDtcclxuICAgIGNvbnN0IGNoaWxkUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBkaXZSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkaXZSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgscmlnaHRTY3JsKVxyXG4gICAgICAgICAgICBpZiAoZGl2UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgtd2luZG93LmlubmVyV2lkdGg8IC1yaWdodFNjcmwpIHtcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK3dpbmRvdy5pbm5lcldpZHRofXB4KWBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3JpZ2h0U2NybH1weClgXHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID0gMjEwXHJcbiAgICAgICAgICAgICAgICBsZWZ0U2NybCA9IGxlZnRTY3JsLTIxMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0U2NybCA9IHJpZ2h0U2NybC0yMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZGl2UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZWZ0LGxlZnRTY3JsLHJpZ2h0U2NybClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xmdCBidG4nLGxlZnQpXHJcbiAgICAgICAgICAgIGlmKGxlZnQ+IC0yMTApe1xyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgXHJcbiAgICAgICAgICAgICAgICByaWdodFNjcmwgPSAtMjEwOyBcclxuICAgICAgICAgICAgICAgIGxlZnRTY3JsID0gMjEwO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWZ0aW5lbnQnLGxlZnQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2JlbGFrZmphXCIpXHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2xlZnRTY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIHJpZ2h0U2NybCA9cmlnaHRTY3JsICsyMTBcclxuICAgICAgICAgICAgICAgIGxlZnRTY3JsID0gbGVmdFNjcmwrMjEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nQ29tcCcpWzBdXHJcbiAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLkNzbGlja30+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpPT5jbGlja0hhbmRsZXIoJ3ByZXYnKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5QcmV2PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2UmVmfSBjbGFzc05hbWU9e3N0eWxlcy5zbGljaysgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRSZWZ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgb25DbGljaz17KCk9PmNsaWNrSGFuZGxlcignbmV4dCcpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==