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

  var styleImg = _ref.styleImg,
      imgArr = _ref.imgArr;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map(function (src, index) {
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
          className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "OD7bBpZva5O2jO+Puf00hKivP7c="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var imgArrData = [{
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData),
      imgArr = _useState[0],
      imgArrUpdt = _useState[1];

  var imageUpdateArr = imgArr;
  var id = 12;
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
  }, 500);

  var debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    func.apply(void 0, args);
    console.log('deibounc');
  }, 100);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
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

  var updateSliderArray = function updateSliderArray() {
    var newElement = [{
      'src': 'static/per1.jpg',
      id: id
    }, {
      'src': 'static/per2.jpg',
      id: id + 1
    }]; // imgArr.push(...newElement)

    imageUpdateArr = imageUpdateArr.concat(newElement);
    imgArrUpdt(imageUpdateArr);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    id = id + 2; // // console.log(imgArrData)
    // clickHandler('next')
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
        // divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth+sliderVisibleWidth}px)`
        // // Update slider position reference, pass 'next' to update refrence with respect to next button click
        // updateSliderPositionRef('next')
        // endOfSlide = true
        updateSliderArray();
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
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
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
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

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

    var prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    slickSliderMainContainer.current.addEventListener('mouseenter', function () {
      return clearAutoSliderMove(timerId);
    });
    slickSliderMainContainer.current.addEventListener('mouseleave', function () {
      return autoSliderMove(1000, true);
    });
    window.addEventListener('resize', function () {
      debounce(initValues);
      debounce(resetSliderPosition);
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
        return clearAutoSliderMove(timerId);
      });
      slickSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return autoSliderMove(1000, true);
      });
      window.addEventListener('resize', function () {
        initValues();
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
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      slickSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      slickSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      });
      images.forEach(function (image) {
        image.removeEventListener('dragstart', function (e) {
          return dragHandler(e);
        });
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
      lineNumber: 307,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        imgArr: imgArr,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "wNCySV8PzX3f5UnsIgIU7/d8Tdc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJ1c2VFZmZlY3QiLCJpZCIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImltZ0FyckRhdGEiLCJ1c2VTdGF0ZSIsImltZ0FyclVwZHQiLCJpbWFnZVVwZGF0ZUFyciIsInRpbWVySWQiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2Q2FyZHNDb250YWluZXIiLCJzbGlja1NsaWRlck1haW5Db250YWluZXIiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiY3VycmVudCIsInN0eWxlIiwiY3NzVGV4dCIsImRpc3BsYXlBcnJvdyIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzcGxheSIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwidXBkYXRlU2xpZGVyQXJyYXkiLCJuZXdFbGVtZW50IiwiY29uY2F0IiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsImVhY2hTbGlkZU1hcmdpbiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5MZWZ0Iiwic2xpY2UiLCJOdW1iZXIiLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsIm5leHRCdG4iLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLGdCQUFHQyxpREFBVSxTQUFDLGdCQUFtQkMsa0JBQW5CLEVBQXlDO0FBQUE7O0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTlCQyxNQUE4QixRQUE5QkEsTUFBOEI7QUFHNURDLGtEQUFTLENBQUMsWUFBSTtBQUNkLFFBQUlDLEVBQUUsR0FBRyxFQUFUO0FBR0MsR0FKUSxFQUlQLEVBSk8sQ0FBVCxDQUg0RCxDQVM1RDs7QUFDQSxzQkFDSTtBQUFBLGNBQ0tGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEdBQUQsRUFBS0MsS0FBTCxFQUFhO0FBQ3JCLDBCQUNJO0FBQW1CLFdBQUcsRUFBRVAsa0JBQXhCO0FBQTRDLGFBQUssRUFBRUMsUUFBbkQ7QUFBOEQsaUJBQVMsRUFBRU8scUVBQUEsR0FBVyxhQUFwRjtBQUFBLCtCQUNJO0FBQWtCLGlCQUFPLEVBQUMsTUFBMUI7QUFBaUMsZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUMsU0FBUDtBQUFpQkMscUJBQVMsRUFBQyxPQUEzQjtBQUFtQ0Msa0JBQU0sRUFBQztBQUExQyxXQUF4QztBQUEyRixhQUFHLEVB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LEVBQUVhLGlCQUFWO0FBQTZCLGVBQVMsRUFBRWIsdUVBQUEsR0FBYyxXQUF0RDtBQUFBLDZCQUNBLDhEQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVSLGtCQUFWO0FBQThCLGNBQU0sRUFBRUUsTUFBdEM7QUFBOEMsZ0JBQVEsRUFBRUQ7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQU1HO0FBQUksZUFBUyxFQUFFTyx3RUFBQSxHQUFjLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWhTRDs7SUFBTUksVzs7TUFBQUEsVztBQWtTTiwrREFBZUEsV0FBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuODk1ZDkxZGY4YjdjNmM4MGNjMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpY2tTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5cclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIFxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdBcnIubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgaW1hZ2VDb250ICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17c3JjLmlkfSBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nQXJyLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyRGF0YSlcclxuICAgIGxldCBpbWFnZVVwZGF0ZUFycj1pbWdBcnI7XHJcbiAgICBsZXQgaWQgPSAxMjtcclxuICAgIGxldCB0aW1lcklkO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDUwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgMTAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgICghdG9EaXNwbGF5KWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGlyZWN0aW9uKVswXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRpcmVjdGlvbilbMF0uc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyQXJyYXkgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkKzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyBpbWdBcnIucHVzaCguLi5uZXdFbGVtZW50KVxyXG4gICAgICAgIGltYWdlVXBkYXRlQXJyID0gIGltYWdlVXBkYXRlQXJyLmNvbmNhdChuZXdFbGVtZW50KVxyXG4gICAgICAgIGltZ0FyclVwZHQoaW1hZ2VVcGRhdGVBcnIgKTtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWQgPSBpZCsyO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGltZ0FyckRhdGEpXHJcbiAgICAgICAgLy8gY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWNoZWQgZW5kIG9mIHNsaWRlIHJldHVybiB0byBmaXJzdCBzbGlkZVxyXG4gICAgICAgICAgICBpZihlbmRPZlNsaWRlKXsgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gMjM2MDsgYW5kIHNsaWRlclZpc2libGVXaWR0aCA9IDEzMzYgYW5kIG5leHRQeFZhbHVlVG9TY3JsID0gLTE0NDAgdGhlblxyXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVmlzaWJsZVdpZHRoIGlzIHNsaWRlciB3aWR0aCB3aGljaCBpcyB2aXNpYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCBpcyB0b3RhbCB3aWR0aCBvZiBjb250YWluZXIgaG9sZGluZyBjYXJkcyA9ICB2aXNpYmxlIGFyZWEraGlkZGVuIGFyZWFcclxuICAgICAgICAgICAgfWVsc2UgaWYgKChkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoKTwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgLy8gZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlckFycmF5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBuZXh0IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudCkubWFyZ2luTGVmdC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMiBcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyQXV0b1NsaWRlck1vdmU9KHRpbWVySWQpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VzZWVudGVyXCIpXHJcbiAgICAgICAgaWYodGltZXJJZCl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFVzZWVmZmVjdCBmb3Igc2xpZGVyIG5leHQgYW5kIHByZXYgYnV0dG9uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgYXV0b1NsaWRlck1vdmUoMjAwMCx0cnVlKVxyXG4gICAgICAgIC8vIENhcHR1cmUgbmV4dCBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5leHRCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBwcmV2aW91cyBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgZGVib3VuY2UoaW5pdFZhbHVlcylcclxuICAgICAgICAgICBkZWJvdW5jZShyZXNldFNsaWRlclBvc2l0aW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gICAgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApfSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAvLyBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSlcclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e2ltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApfSlcclxuICAgICAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZSh0b3VjaFN0YXJ0SGFuZGxlciwyMDAwLGUpIFxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2sgKyAnIHNsaWNrTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gaW1nQXJyPXtpbWdBcnJ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja1NsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZihuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGhcclxuLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmV2UHhWYWx1ZVRvU2NybClcclxuLy8gICAgICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyJdLCJzb3VyY2VSb290IjoiIn0=