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
      }, 1000);
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

    var prevBtn = document.getElementsByClassName('prev')[0];
    var slickMainContainerDi = document.getElementsByClassName('imgComp')[0];
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      image.addEventListener('mouseenter', function (e) {
        return throttle(clearAutoSliderMove, timerId);
      });
    });
    images.forEach(function (image) {
      image.addEventListener('mouseleave', function () {
        return throttle(autoSliderMove, 2000, true);
      });
    }); // Handle click event for both buttons

    nextBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    }); // slickMainContainerDi.addEventListener('mouseenter',()=>throttle(clearAutoSliderMove,timerId))
    // slickMainContainerDi.addEventListener('mouseleave',()=>throttle(autoSliderMove,2000,true) )

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
    if (touchEndPos === touchStartPos) return;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  var dragHandler = function dragHandler(e) {
    e.preventDefault();
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      image.addEventListener('dragstart', function (e) {
        return dragHandler(e);
      });
    });
    slickSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    });
    slickSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    });
    childSliderCardRef.current.removeEventListener('dragstart', function (e) {
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
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick) + ' slickMainContainerDiv ',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 280,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJpZCIsInVzZVN0YXRlIiwiaW1nU3RhdGUiLCJpbWdBcnJVcGR0IiwidXNlRWZmZWN0IiwibWFwIiwic3JjIiwiaW5kZXgiLCJzdHlsZXMiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImhlaWdodCIsIlNsaWNrU2xpZGVyIiwidGltZXJJZCIsImR1bW15IiwiZHUiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsInNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciIsInNsaWRlclZpc2libGVXaWR0aCIsImVhY2hTbGlkZVdpZHRoIiwic2xpZGVzVG9TY3JvbGwiLCJzbGlkZXNUb1Njcm9sbFdpZHRoIiwibmV4dFB4VmFsdWVUb1NjcmwiLCJwcmV2UHhWYWx1ZVRvU2NybCIsImRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCIsImVuZE9mU2xpZGUiLCJ0aHJvdHRsZSIsIl8iLCJmdW5jIiwiYXJncyIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93IiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsIm9mZnNldFdpZHRoIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJzbGljZSIsIk51bWJlciIsImF1dG9TbGlkZXJNb3ZlIiwidGltZW91dCIsImF1dG9wbGF5IiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsIm5leHRCdG4iLCJwcmV2QnRuIiwic2xpY2tNYWluQ29udGFpbmVyRGkiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJ0b3VjaEVuZEhhbmRsZXIiLCJ0b3VjaEVuZFBvcyIsImRyYWdIYW5kbGVyIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsZ0JBQUdDLGlEQUFVLFNBQUMsZ0JBQVlDLGtCQUFaLEVBQWtDO0FBQUE7O0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUNyRCxNQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUNJLFdBQU0sZUFEVjtBQUVJQyxNQUFFLEVBQUM7QUFGUCxHQURXLEVBS1g7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FMVyxFQVNYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBVFcsRUFhWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQWJXLEVBaUJYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBakJXLEVBb0JUO0FBQ0UsV0FBTSxlQURSO0FBRUVBLE1BQUUsRUFBQztBQUZMLEdBcEJTLEVBd0JYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBeEJXLEVBNEJYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBNUJXLEVBZ0NYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBaENXLEVBb0NYO0FBQ0ksV0FBTSxnQkFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQXBDVyxDQUFmOztBQURxRCxrQkEyQ3ZCQywrQ0FBUSxDQUFDRixNQUFELENBM0NlO0FBQUEsTUEyQzlDRyxRQTNDOEM7QUFBQSxNQTJDckNDLFVBM0NxQzs7QUE0Q3JEQyxrREFBUyxDQUFDLFlBQUk7QUFDZCxRQUFJSixFQUFFLEdBQUcsRUFBVDtBQUdDLEdBSlEsRUFJUCxFQUpPLENBQVQsQ0E1Q3FELENBa0RyRDs7QUFDQSxzQkFDSTtBQUFBLGNBQ0tFLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLEdBQUQsRUFBS0MsS0FBTCxFQUFhO0FBQ3ZCLDBCQUNJO0FBQW1CLFdBQUcsRUFBRVYsa0JBQXhCO0FBQTRDLGFBQUssRUFBRUMsUUFBbkQ7QUFBOEQsaUJBQVMsRUFBRVUscUVBQUEsR0FBVyxhQUFwRjtBQUFBLCtCQUNJO0FBQUssaUJBQU8sRUFBQyxNQUFiO0FBQW9CLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFDLFNBQVA7QUFBaUJDLHFCQUFTLEVBQUMsT0FBM0I7QUFBbUNDLGtCQUFNLEVBQUM7QUFBMUMsV0FBM0I7QUFBOEUsYUFBRyxFQUFFTCxHQUFHLENBQUNBLEdBQXZGO0FBQTBHLG1CQUFTLEVBQUUsYUFBckg7QUFBcUksYUFBRyxFQUFDO0FBQXpJLFdBQWtHQSxHQUFHLENBQUNOLEVBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVTSxHQUFHLENBQUNOLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsS0FOQTtBQURMLG1CQURKO0FBV0gsQ0E5RHFCLGtDQUF0QjtNQUFNTCxHOztBQStETixJQUFNaUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFJQyxPQUFKO0FBQ0EsTUFBTWYsUUFBUSxHQUFHO0FBQ2JXLFNBQUssRUFBQyxPQURPO0FBRWJFLFVBQU0sRUFBQztBQUZNLEdBQWpCOztBQUZzQixtQkFNTFYsK0NBQVEsRUFOSDtBQUFBLE1BTWpCYSxLQU5pQjtBQUFBLE1BTVhDLEVBTlcsa0JBT3RCOzs7QUFDQSxNQUFNbEIsa0JBQWtCLEdBQUdtQiw2Q0FBTSxFQUFqQyxDQVJzQixDQVN0Qjs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0QsNkNBQU0sRUFBaEMsQ0FWc0IsQ0FXdEI7O0FBQ0EsTUFBTUUsd0JBQXdCLEdBQUdGLDZDQUFNLEVBQXZDLENBWnNCLENBYXRCOztBQUNBLE1BQUlHLGtCQUFrQixHQUFDLENBQXZCO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUMsQ0FBeEI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxDQUF4QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBQ0EsTUFBSUMsMkJBQTJCLEdBQUMsQ0FBaEMsQ0FwQnNCLENBc0J0Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsS0FBakIsQ0F2QnNCLENBd0J0Qjs7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLHNEQUFBLENBQVcsVUFBQ0MsSUFBRCxFQUFpQjtBQUFBLHNDQUFSQyxJQUFRO0FBQVJBLFVBQVE7QUFBQTs7QUFDdkNELFFBQUksTUFBSixTQUFRQyxJQUFSO0FBQ0gsR0FGYyxFQUVaLElBRlksQ0FBZjs7QUFHQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQUs7QUFDN0I7QUFDQVIscUJBQWlCLEdBQUcsQ0FBQ0QsbUJBQXJCO0FBQ0FFLHFCQUFpQixHQUFHRixtQkFBcEI7QUFDQUwscUJBQWlCLENBQUNlLE9BQWxCLENBQTBCQyxLQUExQixDQUFnQ0MsT0FBaEMsb0NBQW9FLENBQXBFO0FBQ0gsR0FMRDs7QUFNQSxNQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxHQUFtQztBQUFBLFFBQWxDQyxTQUFrQyx1RUFBeEIsTUFBd0I7QUFBQSxRQUFqQkMsU0FBaUIsdUVBQVAsSUFBTztBQUNsRCxRQUFLLENBQUNBLFNBQU4sRUFBZ0JDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0NILFNBQWhDLEVBQTJDLENBQTNDLEVBQThDSCxLQUE5QyxDQUFvRE8sT0FBcEQsR0FBNEQsTUFBNUQsQ0FBaEIsS0FDS0YsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQ0gsU0FBaEMsRUFBMkMsQ0FBM0MsRUFBOENILEtBQTlDLENBQW9ETyxPQUFwRCxHQUE0RCxjQUE1RDtBQUNSLEdBSEQ7O0FBSUEsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxTQUFELEVBQWM7QUFDMUM7QUFDQTtBQUNBLFFBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUF5QjtBQUNyQjtBQUNBO0FBQ0FsQix1QkFBaUIsR0FBR0EsaUJBQWlCLEdBQUNGLG1CQUF0QyxDQUhxQixDQUlyQjtBQUNBOztBQUNBQyx1QkFBaUIsR0FBR0EsaUJBQWlCLEdBQUNELG1CQUF0QyxDQU5xQixDQU9yQjtBQUNBO0FBQ0gsS0FURCxNQVNLO0FBQ0Q7QUFDQUMsdUJBQWlCLEdBQUVBLGlCQUFpQixHQUFFRCxtQkFBdEMsQ0FGQyxDQUdEO0FBQ0E7O0FBQ0FFLHVCQUFpQixHQUFHQSxpQkFBaUIsR0FBQ0YsbUJBQXRDLENBTEMsQ0FNRDtBQUNBO0FBQ0g7QUFDSixHQXJCRDs7QUFzQkEsTUFBTXFCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNQLFNBQUQsRUFBYTtBQUU5QjtBQUNBLFFBQUlBLFNBQVMsS0FBSyxNQUFsQixFQUF5QjtBQUNyQkQsa0JBQVksQ0FBQyxNQUFELEVBQVEsSUFBUixDQUFaLENBRHFCLENBRXJCOztBQUNBLFVBQUdULFVBQUgsRUFBYztBQUNWO0FBQ0FLLDJCQUFtQjtBQUNuQkwsa0JBQVUsR0FBRyxLQUFiLENBSFUsQ0FJVjtBQUNBO0FBQ0E7QUFDSCxPQVBELE1BT00sSUFBS0QsMkJBQTJCLEdBQUNOLGtCQUE3QixHQUFrRCxDQUFDSSxpQkFBdkQsRUFBMEU7QUFDNUU7QUFDQU4seUJBQWlCLENBQUNlLE9BQWxCLENBQTBCQyxLQUExQixDQUFnQ0MsT0FBaEMsbUNBQW1FLENBQUNULDJCQUFELEdBQTZCTixrQkFBaEcsU0FGNEUsQ0FHNUU7O0FBQ0FzQiwrQkFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0FmLGtCQUFVLEdBQUcsSUFBYjtBQUNILE9BTkssTUFNRDtBQUNEO0FBQ0FULHlCQUFpQixDQUFDZSxPQUFsQixDQUEwQkMsS0FBMUIsQ0FBZ0NDLE9BQWhDLG1DQUFtRVgsaUJBQW5FLFNBRkMsQ0FHRDs7QUFDQWtCLCtCQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQWYsa0JBQVUsR0FBRyxLQUFiO0FBQ0g7QUFDSixLQXZCRCxNQXVCTSxJQUFHVSxTQUFTLEtBQUssTUFBakIsRUFBd0I7QUFDMUI7QUFDQVYsZ0JBQVUsR0FBRyxLQUFiOztBQUNBLFVBQUdGLGlCQUFpQixHQUFDLENBQXJCLEVBQXVCO0FBQ25CVyxvQkFBWSxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQVosQ0FEbUIsQ0FFbkI7QUFDQTs7QUFDQUosMkJBQW1CO0FBQ3RCLE9BTEQsTUFLSztBQUNESSxvQkFBWSxDQUFDLE1BQUQsRUFBUSxJQUFSLENBQVosQ0FEQyxDQUVEOztBQUNBbEIseUJBQWlCLENBQUNlLE9BQWxCLENBQTBCQyxLQUExQixDQUFnQ0MsT0FBaEMsbUNBQW1FVixpQkFBbkUsU0FIQyxDQUlEOztBQUNBaUIsK0JBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNIO0FBR0o7QUFDSixHQTVDRDs7QUE2Q0EsTUFBTUcsVUFBVSxHQUFFLFNBQVpBLFVBQVksR0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQXpCLHNCQUFrQixHQUFHRCx3QkFBd0IsQ0FBQ2MsT0FBekIsQ0FBaUNhLFdBQXRELENBSm1CLENBS25CO0FBQ0E7O0FBQ0EsUUFBSUMsZUFBZSxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCbkQsa0JBQWtCLENBQUNtQyxPQUEzQyxFQUFvRGlCLFVBQXBELENBQStEQyxLQUEvRCxDQUFxRSxDQUFyRSxFQUF3RSxDQUFDLENBQXpFLENBQXRCLENBUG1CLENBUW5COztBQUNBSixtQkFBZSxHQUFDSyxNQUFNLENBQUNMLGVBQUQsQ0FBTixHQUF3QixDQUF4QyxDQVRtQixDQVVuQjs7QUFDQTFCLGtCQUFjLEdBQUd2QixrQkFBa0IsQ0FBQ21DLE9BQW5CLENBQTJCYSxXQUEzQixHQUF1Q0MsZUFBeEQsQ0FYbUIsQ0FZbkI7QUFDQTs7QUFDQXpCLGtCQUFjLEdBQUcsQ0FBakIsQ0FkbUIsQ0FlbkI7O0FBQ0FDLHVCQUFtQixHQUFDRixjQUFjLEdBQUNDLGNBQW5DLENBaEJtQixDQWlCbkI7O0FBQ0FHLHFCQUFpQixHQUFHRixtQkFBcEIsQ0FsQm1CLENBa0JzQjs7QUFDekNDLHFCQUFpQixHQUFHLENBQUNELG1CQUFyQixDQW5CbUIsQ0FtQnVCO0FBQzFDOztBQUNBRywrQkFBMkIsR0FBR1IsaUJBQWlCLENBQUNlLE9BQWxCLENBQTBCYSxXQUF4RDtBQUNBVixnQkFBWSxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQVo7QUFDSCxHQXZCRDs7QUF5QkEsTUFBTWlCLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLE9BQUQsRUFBU0MsUUFBVCxFQUFvQjtBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFDQSxRQUFHRixRQUFILEVBQVk7QUFDUnpDLGFBQU8sR0FBQzRDLFdBQVcsQ0FBQyxZQUFJO0FBQ3BCOUIsZ0JBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVI7QUFDSCxPQUZrQixFQUVqQixJQUZpQixDQUFuQjtBQUdIO0FBQ0osR0FQRDs7QUFRQSxNQUFNZSxtQkFBbUIsR0FBQyxTQUFwQkEsbUJBQW9CLENBQUM3QyxPQUFELEVBQVc7QUFDakMwQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaOztBQUNBLFFBQUczQyxPQUFILEVBQVc7QUFDUDhDLGtCQUFZLENBQUM5QyxPQUFELENBQVo7QUFDSDtBQUNKLEdBTEQsQ0ExSXNCLENBZ0p0Qjs7O0FBQ0FULGtEQUFTLENBQUMsWUFBSTtBQUNWO0FBQ0E7QUFDQXdDLGNBQVU7QUFDVlEsa0JBQWMsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUFkLENBSlUsQ0FLVjs7QUFDQSxRQUFNUSxPQUFPLEdBQUl0QixRQUFRLENBQUNDLHNCQUFULENBQWdDLE1BQWhDLEVBQXdDLENBQXhDLENBQWpCLENBTlUsQ0FPVjs7QUFDQSxRQUFNc0IsT0FBTyxHQUFHdkIsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxNQUFoQyxFQUF3QyxDQUF4QyxDQUFoQjtBQUNBLFFBQU11QixvQkFBb0IsR0FBR3hCLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsU0FBaEMsRUFBMkMsQ0FBM0MsQ0FBN0I7QUFDQSxRQUFJd0IsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBVzNCLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBWCxDQUFiO0FBQ0F3QixVQUFNLENBQUNHLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVM7QUFBQ0EsV0FBSyxDQUFDQyxnQkFBTixDQUF1QixZQUF2QixFQUFvQyxVQUFDQyxDQUFEO0FBQUEsZUFBSzFDLFFBQVEsQ0FBQytCLG1CQUFELEVBQXFCN0MsT0FBckIsQ0FBYjtBQUFBLE9BQXBDO0FBQWlGLEtBQTFHO0FBQ0FrRCxVQUFNLENBQUNHLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVM7QUFBQ0EsV0FBSyxDQUFDQyxnQkFBTixDQUF1QixZQUF2QixFQUFvQztBQUFBLGVBQUl6QyxRQUFRLENBQUN5QixjQUFELEVBQWdCLElBQWhCLEVBQXFCLElBQXJCLENBQVo7QUFBQSxPQUFwQztBQUE2RSxLQUF0RyxFQVpVLENBYVY7O0FBQ0FRLFdBQU8sQ0FBQ1EsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBaUM7QUFBQSxhQUFJekMsUUFBUSxDQUFDZ0IsWUFBRCxFQUFjLE1BQWQsQ0FBWjtBQUFBLEtBQWpDO0FBQ0FrQixXQUFPLENBQUNPLGdCQUFSLENBQXlCLE9BQXpCLEVBQWlDO0FBQUEsYUFBSXpDLFFBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVo7QUFBQSxLQUFqQyxFQWZVLENBZ0JWO0FBQ0E7O0FBQ0FJLFVBQU0sQ0FBQ3FCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDLFlBQUk7QUFDakN6QyxjQUFRLENBQUNpQixVQUFELENBQVI7QUFDQWpCLGNBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVI7QUFDQWhCLGNBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVI7QUFDSCxLQUpEO0FBS0EsV0FBTyxZQUFJO0FBQ1A7QUFDQWlCLGFBQU8sQ0FBQ1UsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBb0M7QUFBQSxlQUFJM0MsUUFBUSxDQUFDZ0IsWUFBRCxFQUFjLE1BQWQsQ0FBWjtBQUFBLE9BQXBDO0FBQ0FrQixhQUFPLENBQUNTLG1CQUFSLENBQTRCLE9BQTVCLEVBQW9DO0FBQUEsZUFBSTNDLFFBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVo7QUFBQSxPQUFwQztBQUVBekIsOEJBQXdCLENBQUNjLE9BQXpCLENBQWlDc0MsbUJBQWpDLENBQXFELFlBQXJELEVBQWtFO0FBQUEsZUFBSTNDLFFBQVEsQ0FBQytCLG1CQUFELEVBQXFCN0MsT0FBckIsQ0FBWjtBQUFBLE9BQWxFO0FBQ0FLLDhCQUF3QixDQUFDYyxPQUF6QixDQUFpQ3NDLG1CQUFqQyxDQUFxRCxZQUFyRCxFQUFrRTtBQUFBLGVBQUkzQyxRQUFRLENBQUN5QixjQUFELEVBQWdCLElBQWhCLEVBQXFCLElBQXJCLENBQVo7QUFBQSxPQUFsRTtBQUNBTCxZQUFNLENBQUNxQixnQkFBUCxDQUF3QixRQUF4QixFQUFpQyxZQUFJO0FBQ2pDekMsZ0JBQVEsQ0FBQ2lCLFVBQUQsQ0FBUjtBQUNBakIsZ0JBQVEsQ0FBQ2dCLFlBQUQsRUFBYyxNQUFkLENBQVI7QUFDQWhCLGdCQUFRLENBQUNnQixZQUFELEVBQWMsTUFBZCxDQUFSO0FBQ0gsT0FKRDtBQUtILEtBWkQ7QUFhSCxHQXBDUSxFQW9DUCxFQXBDTyxDQUFUO0FBcUNBLE1BQUk0QixhQUFhLEdBQUUsQ0FBbkI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSCxDQUFELEVBQUs7QUFDM0JFLGlCQUFhLEdBQUNGLENBQUMsQ0FBQ0ksY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBbEMsQ0FEMkIsQ0FFM0I7QUFDSCxHQUhEOztBQUlBLE1BQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsQ0FBQ04sQ0FBRCxFQUFLO0FBQ3ZCLFFBQUlPLFdBQVcsR0FBTVAsQ0FBQyxDQUFDSSxjQUFGLENBQWlCLENBQWpCLEVBQW9CQyxPQUF6QztBQUNBLFFBQUlFLFdBQVcsS0FBR0wsYUFBbEIsRUFBaUM7QUFDakMsUUFBSUssV0FBVyxHQUFDTCxhQUFaLEdBQTBCLENBQTlCLEVBQWlDNUIsWUFBWSxDQUFDLE1BQUQsQ0FBWixDQUFqQyxLQUNLQSxZQUFZLENBQUMsTUFBRCxDQUFaO0FBQ1IsR0FMRDs7QUFNQSxNQUFNa0MsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1IsQ0FBRCxFQUFNO0FBQ3RCQSxLQUFDLENBQUNTLGNBQUY7QUFDSCxHQUZELENBak1zQixDQW9NdEI7OztBQUNBMUUsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBSTJELE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVczQixRQUFRLENBQUNDLHNCQUFULENBQWdDLGFBQWhDLENBQVgsQ0FBYjtBQUNBd0IsVUFBTSxDQUFDRyxPQUFQLENBQWUsVUFBQ0MsS0FBRCxFQUFTO0FBQUNBLFdBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBbUMsVUFBQ0MsQ0FBRDtBQUFBLGVBQUtRLFdBQVcsQ0FBQ1IsQ0FBRCxDQUFoQjtBQUFBLE9BQW5DO0FBQXlELEtBQWxGO0FBQ0FuRCw0QkFBd0IsQ0FBQ2MsT0FBekIsQ0FBaUNvQyxnQkFBakMsQ0FBa0QsWUFBbEQsRUFBK0QsVUFBQ0MsQ0FBRDtBQUFBLGFBQUtHLGlCQUFpQixDQUFDSCxDQUFELENBQXRCO0FBQUEsS0FBL0Q7QUFDQW5ELDRCQUF3QixDQUFDYyxPQUF6QixDQUFpQ29DLGdCQUFqQyxDQUFrRCxVQUFsRCxFQUE2RCxVQUFDQyxDQUFEO0FBQUEsYUFBS00sZUFBZSxDQUFDTixDQUFELENBQXBCO0FBQUEsS0FBN0Q7QUFDQXhFLHNCQUFrQixDQUFDbUMsT0FBbkIsQ0FBMkJzQyxtQkFBM0IsQ0FBK0MsV0FBL0MsRUFBMkQsVUFBQ0QsQ0FBRDtBQUFBLGFBQUtRLFdBQVcsQ0FBQ1IsQ0FBRCxDQUFoQjtBQUFBLEtBQTNELEVBTFUsQ0FNVjs7QUFDQSxXQUFPLFlBQUs7QUFDUm5ELDhCQUF3QixDQUFDYyxPQUF6QixDQUFpQ3NDLG1CQUFqQyxDQUFxRCxZQUFyRCxFQUFrRSxVQUFDRCxDQUFEO0FBQUEsZUFBS0csaUJBQWlCLENBQUNILENBQUQsQ0FBdEI7QUFBQSxPQUFsRTtBQUNBbkQsOEJBQXdCLENBQUNjLE9BQXpCLENBQWlDc0MsbUJBQWpDLENBQXFELFVBQXJELEVBQWdFLFVBQUNELENBQUQ7QUFBQSxlQUFLTSxlQUFlLENBQUNOLENBQUQsQ0FBcEI7QUFBQSxPQUFoRSxFQUZRLENBR1I7QUFDQTtBQUNILEtBTEQ7QUFNSCxHQWJRLEVBYVAsRUFiTyxDQUFUO0FBY0Esc0JBQ0k7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFxQixPQUFHLEVBQUVuRCx3QkFBMUI7QUFBcUQsYUFBUyxFQUFFVix3RUFBQSxHQUFnQix5QkFBaEY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBRUEsd0VBQUEsR0FBYyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxTQUFHLEVBQUVTLGlCQUFWO0FBQTZCLGVBQVMsRUFBRVQsdUVBQUEsR0FBYyxXQUF0RDtBQUFBLDZCQUNBLDhEQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVYLGtCQUFWO0FBQThCLGdCQUFRLEVBQUVDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNRztBQUFJLGVBQVMsRUFBRVUsd0VBQUEsR0FBYyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0E3TkQ7O0lBQU1JLFc7O01BQUFBLFc7QUErTk4sK0RBQWVBLFdBQWYsRSxDQUNHO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjQxMWNjZmQwYThlYmMyZDY2MjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZ30sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIGNvbnN0IGltZ0FyciA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMi5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo1LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6NyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEwLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIF1cclxuICAgIGNvbnN0IFtpbWdTdGF0ZSxpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FycilcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGlkID0gMTE7XHJcbiBcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICAvLyBsZXQgaW1hZ2VTbGlkZSA9IHVzZVJlZihudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ltZ1N0YXRlLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGltYWdlQ29udCAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAga2V5PXtzcmMuaWR9IGNsYXNzTmFtZT17J2ltYWdlSG9sZGVyJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGxldCB0aW1lcklkO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICB2YXIgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDEwMDApO1xyXG4gICAgY29uc3QgcmVzZXRTbGlkZXJQb3NpdGlvbiA9ICgpID0+e1xyXG4gICAgICAgIC8vIGRlZmF1bHQgc2xpZGVzVG9TY3JvbGxXaWR0aDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlBcnJvdz0oZGlyZWN0aW9uPSdwcmV2Jyx0b0Rpc3BsYXk9dHJ1ZSk9PntcclxuICAgICAgICBpZiAgKCF0b0Rpc3BsYXkpZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkaXJlY3Rpb24pWzBdLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGlyZWN0aW9uKVswXS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmID0gKHVwZGF0ZXJlZikgPT57XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgwKSAtPiBpbml0aWFsIHBvc2l0aW9uLCBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoLTI0MHB4KSAtPiBtb3ZlcyBzbGlkZSBpbiAtPiBkaXJlY3Rpb24gYnkgMjQwcHgoZWFjaCBzbGlkZSB3aWR0aCBieSBkZWZhdWx0KVxyXG4gICAgICAgIGlmICh1cGRhdGVyZWYgPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIG1pbnVzIHBvc2l0aW9uIGdvZXMgLT4gZGlyZWN0aW9uIG9uIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9MjQwLG5leHRQeFZhbHVlVG9TY3JsPS0yNDAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6LTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsPS03MjAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDoyNDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aCk8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGVyIGlzIG92ZXIgbGVmdCByZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGJ5IGRlZmF1bHQgcmVmZXJlbmNlIHByZXZQeFZhbHVlVG9TY3JsIGlzIHNldCB0byAyNDBweCBoZW5jZSB0aGlzIGlzIGV4ZWN1dGVkXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBwcmV2IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIC8vIFNsaWRlciB3aWR0aCBpcyBhbiBvdXRlciBkaXYgd2hpY2ggc2hvd3MgZW50aXJlIHNsaWRlciBpZiB3ZSBzZXQgc2xpZGVyIHRvIGJlIDIwMHB4IHdpZGUtIFxyXG4gICAgICAgIC8vIC13aWR0aCBpcyBzZXQgb24gdGhpcyBkaXYgLCB3ZSBuZWVkIGl0IHRvIGNhbGN1bGF0ZSBzbGlkZXIgdmlzaWJsZSB3aWR0aCBpbiB3aGljaCBzbGlkZXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgc2xpZGVyIHRha2VzIGZ1bGwgdmlld3BvcnQgd2lkdGguZXggOiAxNjAwcHhcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyBJZiBzbGlkZXIgaGFzIG1hcmdpbiAoc3BhY2UgYmV0d2VlbiBzbGlkZXIgY2FyZHMgaWYgc2xpZGVycyBhcmUgdG91Y2ggdG8gZWFjaCBvdGhlciB0aGVuIGl0IGhhcyBubyBtYXJnaW4pLSBcclxuICAgICAgICAvLyAtaXQgaXMgcmVxdWlyZWQgdG8gY2FsY3VsYXRlIGhvdyBtdWNoIGRvZXMgc2xpZGVyIHNjcm9sbHNcclxuICAgICAgICBsZXQgZWFjaFNsaWRlTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQpLm1hcmdpbkxlZnQuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCBtdWx0aXBseSBpdCBieSB0d28gYmVjYXVzZSBtYXJnaW4gaXMgYXBwbGllZCBvbiBib3RoIHNpZGVzXHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjIgXHJcbiAgICAgICAgLy8gRWFjaCBzbGlkZXIgY2FyZCB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyBpdHMgb3duIHdpZHRoIHdpdGggaXRzIG93biBtYXJnaW5cclxuICAgICAgICBlYWNoU2xpZGVXaWR0aCA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGwgPSAxXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgaW4gcGl4ZWxzIGV4OiBpZiAyNDBweFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgLy8gdG8gY2FsY3VsYXRlIGFuZCB0cmFjayBwcm9ncmVzcyBvZiBsZWZ0IGFuZCByaWdodCBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4Oi0yNDBweFxyXG4gICAgICAgIC8vIENhcmRzIGNvbnRhaW5lciB3aWR0aCBnZW5lcmFsbHkgZXF1YWwgdG8gZWFjaHNsaWRlcndpZHRoKnRvdGFsbnVtYmVyb2ZzbGlkZXNcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgYXV0b1NsaWRlck1vdmU9KHRpbWVvdXQsYXV0b3BsYXkpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VzZWxlYXZlXCIpXHJcbiAgICAgICAgaWYoYXV0b3BsYXkpe1xyXG4gICAgICAgICAgICB0aW1lcklkPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVXNlZWZmZWN0IGZvciBzbGlkZXIgbmV4dCBhbmQgcHJldiBidXR0b25cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgd2hlbiBtb3VudGluZ1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcmVxdWlyZWQgdmFsdWVzIGluIHBhcnRpY3VsYXIgZnVuY3Rpb25cclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBuZXh0IGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgbmV4dEJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF1cclxuICAgICAgICAvLyBDYXB0dXJlIHByZXZpb3VzIGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXYnKVswXTtcclxuICAgICAgICBjb25zdCBzbGlja01haW5Db250YWluZXJEaSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZ0NvbXAnKVswXVxyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLChlKT0+dGhyb3R0bGUoY2xlYXJBdXRvU2xpZGVyTW92ZSx0aW1lcklkKSApfSlcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PnRocm90dGxlKGF1dG9TbGlkZXJNb3ZlLDIwMDAsdHJ1ZSkgKX0pXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIC8vIHNsaWNrTWFpbkNvbnRhaW5lckRpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT50aHJvdHRsZShjbGVhckF1dG9TbGlkZXJNb3ZlLHRpbWVySWQpKVxyXG4gICAgICAgIC8vIHNsaWNrTWFpbkNvbnRhaW5lckRpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT50aHJvdHRsZShhdXRvU2xpZGVyTW92ZSwyMDAwLHRydWUpIClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICB0aHJvdHRsZShpbml0VmFsdWVzKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT50aHJvdHRsZShjbGVhckF1dG9TbGlkZXJNb3ZlLHRpbWVySWQpKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+dGhyb3R0bGUoYXV0b1NsaWRlck1vdmUsMjAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShpbml0VmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gICAgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApfSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSApXHJcbiAgICAgICAgY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAvLyBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZSh0b3VjaFN0YXJ0SGFuZGxlciwyMDAwLGUpIFxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2sgKyAnIHNsaWNrTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==