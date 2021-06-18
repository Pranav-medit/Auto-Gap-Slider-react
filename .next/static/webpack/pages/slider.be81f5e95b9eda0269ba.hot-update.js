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
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childSliderCardRef) {
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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' imageCont ',
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
          lineNumber: 61,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "TLdesTkvEVpH+2amsN47teVspjY="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var timerId;
  var styleImg = {
    width: '200px',
    height: '300px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1]; // Each slider card


  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Initialize default values

  var sliderVisibleWidth = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var nextPxValueToScrl = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false; // Loadash throttler to throttle resize and if user clicks button many times 

  var throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle(function (func) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.apply(void 0, args);
  }, 1000);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
  };

  var displayArrow = function displayArrow() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prev';
    var toDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!toDisplay) document.getElementsByClassName(direction)[0].style.display = "none";else document.getElementsByClassName(direction)[0].style.display = "inline-block";
  };

  var updateSliderPositionRef = function updateSliderPositionRef(updateref) {
    // translateX(0) -> initial position, starting position
    // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
    if (updateref === 'next') {
      // minus position goes -> direction on translate
      // ex: prevPxValueToScrl=240,nextPxValueToScrl=-240  and slidesToScrollWidth=240
      prevPxValueToScrl = prevPxValueToScrl - slidesToScrollWidth; // first-time:prevPxValueToScrl:0
      // second-time:prevPxValueToScrl:-240

      nextPxValueToScrl = nextPxValueToScrl - slidesToScrollWidth; // first-time:nextPxValueToScrl:-480
      // second-time:nextPxValueToScrl:-720
    } else {
      // ex: prevPxValueToScrl=-240,nextPxValueToScrl=-720  and slidesToScrollWidth=240
      nextPxValueToScrl = nextPxValueToScrl + slidesToScrollWidth; // first-time:prevPxValueToScrl:480
      // second-time:prevPxValueToScrl:620

      prevPxValueToScrl = prevPxValueToScrl + slidesToScrollWidth; // first-time:nextPxValueToScrl:0
      // second-time:nextPxValueToScrl:240
    }
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    if (direction === 'next') {
      displayArrow('prev', true); // If reached end of slide return to first slide

      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth < -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerTotalWidth + sliderVisibleWidth, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true;
      } else {
        // If everything is right translate to next px value
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrl, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        displayArrow('prev', false); // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed

        resetSliderPosition();
      } else {
        displayArrow('prev', true); // If everything is right translate to prev px value

        divCardsContainer.current.style.cssText = "transform: translateX(".concat(prevPxValueToScrl, "px)"); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px
    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlideMargin = window.getComputedStyle(childSliderCardRef.current).marginLeft.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = childSliderCardRef.current.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
  };

  var autoSliderMove = function autoSliderMove(timeout, autoplay) {
    console.log("mouseleave");

    if (autoplay) {
      timerId = setInterval(function () {
        throttle(clickHandler, 'next');
      }, 10000000000000000);
    }
  };

  var clearAutoSliderMove = function clearAutoSliderMove(timerId) {
    console.log("mouseenter");

    if (timerId) {
      clearTimeout(timerId);
    }
  }; // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    initValues();
    autoSliderMove(2000, true); // Capture next button by class name

    var nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    var prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    slickSliderMainContainer.current.addEventListener('mouseenter', function () {
      return throttle(clearAutoSliderMove, timerId);
    });
    slickSliderMainContainer.current.addEventListener('mouseleave', function () {
      return throttle(autoSliderMove, 2000, true);
    });
    window.addEventListener('resize', function () {
      throttle(initValues);
      throttle(clickHandler, 'next');
      throttle(clickHandler, 'prev');
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      slickSliderMainContainer.current.removeEventListener('mouseenter', function () {
        return throttle(clearAutoSliderMove, timerId);
      });
      slickSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return throttle(autoSliderMove, 2000, true);
      });
      window.addEventListener('resize', function () {
        throttle(initValues);
        throttle(clickHandler, 'next');
        throttle(clickHandler, 'prev');
      });
    };
  }, []);
  var touchStartPos = 0;

  var touchStartHandler = function touchStartHandler(e) {
    touchStartPos = e.changedTouches[0].clientX; // console.log(e.changedTouches[0].clientX)   
  };

  var touchEndHandler = function touchEndHandler(e) {
    var touchEndPos = e.changedTouches[0].clientX;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  var dragHandler = function dragHandler(e) {}; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    slickSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    });
    slickSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    });
    slickSliderMainContainer.current.removeEventListener('dragstart', function (e) {
      return dragHandler(e);
    }); // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      slickSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      slickSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      }); // slickSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "visibleDiv",
    ref: slickSliderMainContainer,
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "85qE4I/QbXsK1pKDZ8HmxtOodcE=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider); // setTimeout(()=>{
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
// else if(left> -slidesToScrollWidth){
//     divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//     nextPxValueToScrl = -slidesToScrollWidth; 
//     prevPxValueToScrl = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -nextPxValueToScrl) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             nextPxValueToScrl = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth;
//             nextPxValueToScrl = nextPxValueToScrl-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(prevPxValueToScrl)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(prevPxValueToScrl>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
//             nextPxValueToScrl =nextPxValueToScrl +slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl+slidesToScrollWidth;
//         }
//     }
// // }
// const left = divCardsContainer.current.getBoundingClientRect().left;
// divCardsContainer.current.scrollLeft = slidesToScrollWidth;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwidGltZXJJZCIsImR1bW15IiwiZHUiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsInNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciIsInNsaWRlclZpc2libGVXaWR0aCIsImVhY2hTbGlkZVdpZHRoIiwic2xpZGVzVG9TY3JvbGwiLCJzbGlkZXNUb1Njcm9sbFdpZHRoIiwibmV4dFB4VmFsdWVUb1NjcmwiLCJwcmV2UHhWYWx1ZVRvU2NybCIsImRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCIsImVuZE9mU2xpZGUiLCJ0aHJvdHRsZSIsIl8iLCJmdW5jIiwiYXJncyIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93IiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsIm9mZnNldFdpZHRoIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGljZSIsIk51bWJlciIsImF1dG9TbGlkZXJNb3ZlIiwidGltZW91dCIsImF1dG9wbGF5IiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsIm5leHRCdG4iLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBWUMsa0JBQVosRUFBa0M7QUFBQTs7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQ3JELE1BQU1DLE1BQU0sR0FBRyxDQUNYO0FBQ0ksV0FBTSxlQURWO0FBRUlDLE1BQUUsRUFBQztBQUZQLEdBRFcsRUFLWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQUxXLEVBU1g7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FUVyxFQWFYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBYlcsRUFpQlg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FqQlcsRUFvQlQ7QUFDRSxXQUFNLGVBRFI7QUFFRUEsTUFBRSxFQUFDO0FBRkwsR0FwQlMsRUF3Qlg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0F4QlcsRUE0Qlg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0E1QlcsRUFnQ1g7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FoQ1csRUFvQ1g7QUFDSSxXQUFNLGdCQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBcENXLENBQWY7O0FBRHFELGtCQTJDdkJDLCtDQUFRLENBQUNGLE1BQUQsQ0EzQ2U7QUFBQSxNQTJDOUNHLFFB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QyxHQUFEO0FBQUssV0FBRyxFQUFFWCxrQkFBVjtBQUE4QixnQkFBUSxFQUFFQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBTUc7QUFBSSxlQUFTLEVBQUVVLHdFQUFBLEdBQWMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBck5EOztJQUFNSSxXOztNQUFBQSxXO0FBdU5OLCtEQUFlQSxXQUFmLEUsQ0FDRztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5iZTgxZjVlOTViOWVkYTAyNjliYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWd9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nU3RhdGUsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnIpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdTdGF0ZS5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBpbWFnZUNvbnQgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG5cclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgdmFyIHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgICghdG9EaXNwbGF5KWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGlyZWN0aW9uKVswXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRpcmVjdGlvbilbMF0uc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgLy8gSWYgcmVhY2hlZCBlbmQgb2Ygc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmKGVuZE9mU2xpZGUpeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSAyMzYwOyBhbmQgc2xpZGVyVmlzaWJsZVdpZHRoID0gMTMzNiBhbmQgbmV4dFB4VmFsdWVUb1NjcmwgPSAtMTQ0MCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJWaXNpYmxlV2lkdGggaXMgc2xpZGVyIHdpZHRoIHdoaWNoIGlzIHZpc2libGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIGlzIHRvdGFsIHdpZHRoIG9mIGNvbnRhaW5lciBob2xkaW5nIGNhcmRzID0gIHZpc2libGUgYXJlYStoaWRkZW4gYXJlYVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoKGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgpPCAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlIGlzIGFib3V0IHRvIHJlYWNoIGxhc3Qgc2xpZGUgLCBsYXN0IGJ1dCBvbmUgY2xpY2sgb2YgZW5kb2ZzbGlkZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIG5leHQgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzbGlkZSBjYW5ub3QgYmUgcmVhY2hlZCBieSBjbGlja2luZyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gcHJldiBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAncHJldicgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ3ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50KS5tYXJnaW5MZWZ0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyIFxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckF1dG9TbGlkZXJNb3ZlPSh0aW1lcklkKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VlbnRlclwiKVxyXG4gICAgICAgIGlmKHRpbWVySWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIGF1dG9TbGlkZXJNb3ZlKDIwMDAsdHJ1ZSlcclxuICAgICAgICAvLyBDYXB0dXJlIG5leHQgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIC8vIENhcHR1cmUgcHJldmlvdXMgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldicpWzBdXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT50aHJvdHRsZShjbGVhckF1dG9TbGlkZXJNb3ZlLHRpbWVySWQpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT50aHJvdHRsZShhdXRvU2xpZGVyTW92ZSwyMDAwLHRydWUpIClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICB0aHJvdHRsZShpbml0VmFsdWVzKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PnRocm90dGxlKGNsZWFyQXV0b1NsaWRlck1vdmUsdGltZXJJZCkpXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT50aHJvdHRsZShhdXRvU2xpZGVyTW92ZSwyMDAwLHRydWUpIClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGluaXRWYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgbGV0IHRvdWNoU3RhcnRQb3MgPTA7XHJcbiAgICBjb25zdCB0b3VjaFN0YXJ0SGFuZGxlciA9IChlKT0+e1xyXG4gICAgICAgIHRvdWNoU3RhcnRQb3M9ZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCkgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHRvdWNoRW5kSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBsZXQgdG91Y2hFbmRQb3MgPSAgICBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zLXRvdWNoU3RhcnRQb3M+MCkgY2xpY2tIYW5kbGVyKCdwcmV2JylcclxuICAgICAgICBlbHNlIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IChlKSA9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgdG91Y2ggY2FwYWJpbGl0eVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGUodG91Y2hTdGFydEhhbmRsZXIsMjAwMCxlKSBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17c2xpY2tTbGlkZXJNYWluQ29udGFpbmVyfSAgY2xhc3NOYW1lPXtzdHlsZXMuQ3NsaWNrfT5cclxuICAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==